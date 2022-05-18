const path = require('path');

module.exports = {

    entry: "./public/play-game/js/Game.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/play-game/dist"),
        publicPath: "/public/play-game/dist",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};