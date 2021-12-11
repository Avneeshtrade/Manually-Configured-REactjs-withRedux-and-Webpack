const path = require('path');
console.log(__dirname);
let config = {
    entry: [path.join(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname,"dist"),
        //publicPath: path.join(__dirname,"dist/"),
        filename: '[name].bundle.js',
        environment: {
            // The environment supports arrow functions ('() => { ... }').
            arrowFunction: true,
            // The environment supports BigInt as literal (123n).
            bigIntLiteral: false,
            // The environment supports const and let for variable declarations.
            const: true,
            // The environment supports destructuring ('{ a, b } = obj').
            destructuring: true,
            // The environment supports an async import() function to import EcmaScript modules.
            dynamicImport: false,
            // The environment supports 'for of' iteration ('for (const x of array) { ... }').
            forOf: true,
            // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
            module: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: '/node_modules'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: '/node_modules'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                exclude: '/node_modules'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
                exclude: '/node_modules'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                exclude: '/node_modules'
            },
        ]

    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
       // ContentBase:path.join(__dirname,'./dist'),
       // onListening:(e)=>{console.log(e);},
        port: 9000,
        liveReload:true,
        allowedHosts: 'all',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        //config.output.publicPath = path.join(__dirname,"dist/");
    }

    if (argv.mode === 'production') {
        //...
    }

    return config;
};