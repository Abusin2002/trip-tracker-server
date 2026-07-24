const User = require("./user.model");
const Trip = require("./trip.model");
const TripMember = require("./tripMember.model");
const Location = require("./location.model");

// Relationships

User.hasMany(Location, {
    foreignKey: "userId",
});

Location.belongsTo(User, {
    foreignKey: "userId",
});

User.hasMany(Trip, {
    foreignKey: "createdBy",
});

Trip.belongsTo(User, {
    foreignKey: "createdBy",
});

User.belongsToMany(Trip, {
    through: TripMember,
    foreignKey: "userId",
});

Trip.belongsToMany(User, {
    through: TripMember,
    foreignKey: "tripId",
});

module.exports = {
    User,
    Trip,
    TripMember,
    Location,
};