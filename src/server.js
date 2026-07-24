require("dotenv").config();
require("./models");

const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const userRoutes = require("./routes/user.routes");
const { connectDatabase } = require("./config/db");
const socketHandler = require("./sockets/socket");

const app = express();
    
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Trip Tracker API Running 🚀"
    });
});

app.use("/api/users", userRoutes);








const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

socketHandler(io);

const PORT = process.env.PORT || 5000;

async function startServer() {
    await connectDatabase();

    server.listen(PORT, () => {
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log(`🚀 Server Running`);
        console.log(`🌍 http://localhost:${PORT}`);
        console.log(`📅 ${new Date().toLocaleString()}`);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    });
}

startServer();