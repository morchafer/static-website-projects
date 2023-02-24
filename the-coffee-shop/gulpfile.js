const { src, dest, watch, series, parallel } = require("gulp");

// Dependencias de CSS & SASS
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("cssnano");

// Dependencias de Imágenes
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

// Tareas:
const css = (done) => {
  /* Pasos: 1 - identificar archivo .scss -> funcion src(), 
              2 - compilar archivo .scss a .css -> funcion sass(), 
              3 - guardar el archivo .css -> función dest() */
  src("src/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));
  done();
};

/* done() hace lo mismo que return en este sentido */

const imgs = () => {
  return src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("build/imgs"));
};

const webpImg = () => {
  const config = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(webp(config))
    .pipe(dest("build/imgs"));
};

const avifImg = () => {
  const config = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(avif(config))
    .pipe(dest("build/imgs"));
};

const devWatcher = () => {
  watch(
    "src/scss/**/*.scss",
    css
  ); /* Gulp ofrece comodines '*' para referenciar archivos que coincidan con la misma extensión escaneándolos desde la ubicación establecida en el string; de esta forma no es necesario crear una invocación de watch (en este ejemplo) por cada archivo .scss que tenga el proyecto. */
  // watch('src/scss/app.scss', css);
  watch("src/img/**/*", imgs);
};

/* exports.css = css;
exports.devWatcher = devWatcher; */
exports.imgs = imgs;
exports.webpImg = webpImg;
exports.avifImg = avifImg;
exports.default = series(css, devWatcher);
// exports.default = series(imgs, webpImg, avifImg, css, devWatcher);
