// 新的mac 15 inch 屏幕像素是2880*1440，但是由于mac的ppi太高，
// 2880*1800的分辨率下是不实用的，看东西都太小，所以苹果将四个物理像素合并成一个虚拟像素。实际使用的时候显示的依然是1440×900。
// 所以macOS提供给应用软件的屏幕像素还是1440*900

const robotjs = require('robotjs')
const { width, height } = robotjs.getScreenSize()
console.log(width+' '+height)


// npm link <module> 会生成一个替身（快捷方式）