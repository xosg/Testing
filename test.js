function rgb2hex(sRGB) {
    var list = sRGB.split(/[()]/)[1].split(',');
    var hexList = list.map(x=>parseInt(x).toString(16));
    return '#'+hexList[0]+hexList[1]+hexList[2];
}