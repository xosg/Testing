let id = 1300
setInterval(() => {
    id++
    $audio.play({
        id
    })
    console.info(id)
    if (id >= 1351) $app.close(); 
},1000)

// ios内置音效
// https://github.com/TUNER88/iOSSystemSoundsLibrary