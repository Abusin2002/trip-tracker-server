const userService = require("../services/user.service");

const createUser = async (req, res) => {
    try {
        
        const user = await userService.createUser(req.body);

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const getUser = async (req, res) => {
    try {

        const user = await userService.getUserByUuid(req.params.uuid);

        return res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {

        return res.status(404).json({
            success: false,
            message: error.message
        });

    }
};

const updateUser = async (req, res) => {
    try {

        const user = await userService.updateUser(
            req.params.uuid,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: user
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
     createUser,
    getUser,
    updateUser
};