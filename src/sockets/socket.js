const { User, Location } = require("../models");

// In-memory registry of currently connected users (uuid -> { name, gender }).
// Lets "disconnect" announce user:left using just socket.uuid, without an
// extra DB round trip on every disconnect.
const connectedUsers = new Map();

module.exports = (io) => {

    io.on("connection", (socket) => {

        console.log("Connected:", socket.id);

        socket.on("join", async ({ uuid }) => {
            socket.uuid = uuid;

            try {
                const user = await User.findOne({
                    where: { uuid }
                });

                if (!user) return;

                connectedUsers.set(uuid, { name: user.name, gender: user.gender });

                // broadcast (not io.emit) - no need to tell the joining user about themself
                socket.broadcast.emit("user:joined", {
                    uuid: user.uuid,
                    name: user.name,
                    gender: user.gender
                });
            } catch (error) {
                console.error("join error:", error.message);
            }
        });

        socket.on("location:update", async (data) => {

            const user = await User.findOne({
                where: {
                    uuid: data.uuid
                }
            });

            if (!user) return;

            await Location.upsert({
                userId: user.id,
                latitude: data.latitude,
                longitude: data.longitude
            });

            connectedUsers.set(user.uuid, { name: user.name, gender: user.gender });

            io.emit("location:updated", {
                uuid: user.uuid,
                name: user.name,
                gender: user.gender,
                latitude: data.latitude,
                longitude: data.longitude
            });

        });

        socket.on("disconnect", () => {
            console.log("Disconnected:", socket.id);

            if (socket.uuid) {
                connectedUsers.delete(socket.uuid);
                socket.broadcast.emit("user:left", { uuid: socket.uuid });
            }
        });

    });

};
