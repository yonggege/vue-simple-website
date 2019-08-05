/*
 *  浏览器自动添加前缀
 */
module.exports = {
  plugins: [
    require('autoprefixer')({
        browsers : ['last 30 versions', "> 2%", "Firefox >= 10", "ie 6-11"]
    })
  ]
}