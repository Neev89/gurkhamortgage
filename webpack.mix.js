const mix = require("laravel-mix")
const path = require("path")
const tailwindCss = require("tailwindcss")

mix.setPublicPath(path.normalize("dist"))
mix.setResourceRoot(path.normalize("assets"))
mix.setResourceRoot("./../")

if (mix.inProduction()) {
  mix.options({
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  })
} else {
  mix.webpackConfig({ devtool: "inline-source-map" }).sourceMaps()
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

mix.webpackConfig({
  resolve: {
    alias: {
      "@": resolve("assets/js"),
    },
  },
  
  output: {
    publicPath: path.normalize("/"),
    chunkFilename: "[name].js",
  },
  
  watchOptions: {
    ignored: /node_modules/,
  },
})

mix.js("assets/js/app.js", "dist/js/app.js").version()

// mix.extract([])

// mix.autoload({
//     jquery: ["$", "window.jQuery"],
// })

mix.postCss("assets/sass/tailwind.css", "dist/css/tailwind.css", [
  tailwindCss("assets/js/tailwind.config.js"),
]).sass("assets/sass/app.scss", "dist/css/app.css").version()
