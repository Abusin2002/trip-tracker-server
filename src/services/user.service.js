const { User } = require("../models");

const VALID_GENDERS = ["male", "female"];

const createUser = async (data) => {
    const { name, gender } = data;

    if (!name || name.trim() === "") {
      throw new Error("Name is required");
    }

    if (!gender || !VALID_GENDERS.includes(gender)) {
      throw new Error("Gender is required and must be 'male' or 'female'");
    }

    const user = await User.create({
        name,
        gender
    });

    return user;
};


const getUserByUuid = async (uuid) => {
    const user = await User.findOne({
        where: { uuid }
    });

    if (!user) {
        throw new Error("User not found");
    }

    return user;
};

const updateUser = async (uuid, data) => {

    const user = await User.findOne({
        where: { uuid }
    });

    if (!user) {
        throw new Error("User not found");
    }

    const name = data.name?.trim();

    if (!name) {
        throw new Error("Name is required");
    }

    if (data.gender !== undefined && !VALID_GENDERS.includes(data.gender)) {
        throw new Error("Gender must be 'male' or 'female'");
    }

    user.name = name;
    if (data.gender !== undefined) {
        user.gender = data.gender;
    }

    await user.save();

    return user;
};

module.exports = {
    createUser,
    getUserByUuid,
    updateUser
};