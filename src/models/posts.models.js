const { DataTypes, DATEONLY } = require("sequelize");
const db = require("../utils/database");
const Posts = db.define("posts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isPublished: {
        type: DataTypes.BOOLEAN,
    },
});

module.exports = Posts;
