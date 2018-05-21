let fs = require("fs");
let dir = '/Users/jim001/Desktop/';
// console.log("查看 /tmp 目录");
fs.readdir(dir, function (err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function (file) { //file是文件名(不包含路径)
        // console.log( file );
        if (file[0] !== '.') {  //串型加[]...这也行..
            fs.stat(dir + file, (err, stat) => {
                if (stat.isDirectory())
                    console.log(file + '/');
                else if (stat.isFile()) console.log(file);
            })
        }
    });
});