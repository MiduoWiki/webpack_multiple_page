;
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "./../main.js"),
    output: {
        path: path.resolve(__dirname, "./../dist"),
        publicPath: "/",
        filename: "[name]/[name].js"
    }
}