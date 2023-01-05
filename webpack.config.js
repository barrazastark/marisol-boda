const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
 
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname + "/build"),
        filename: 'bundle.js',
    },
    
    module: {rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
                loader: "babel-loader",
        options: {
        presets: [ "@babel/preset-env" ]
        }
        }
        },
        {
                test: /\.mp3$/,
                loader: 'file-loader'
            },
        {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
        },
                    
]
        },
        plugins: [
                new HtmlWebpackPlugin({
                        template: path.join(__dirname, './public/index.html')
                }),
                new CopyPlugin({
                        patterns: [
                          { from: "public/resources", to: "resources" },
                        ],
                      }),
        ],
        
        };
    