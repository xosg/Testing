// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

var screenSize = robot.getScreenSize();
var height = screenSize.height
var width = screenSize.width;

let x = width / 2
let y = height / 2
const r = 100

function circle() {
    const pi = Math.PI
    const delta = pi / 180
    let theta = 0

    while (true) {

        theta += delta

        x = width / 2 + r * Math.cos(theta)
        y = height / 2 - r * Math.sin(theta)

        robot.moveMouse(x, y);
    }
}

(function rect() {


    let rectPoints = [
        [width / 2 + r, height / 2 + r],
        [width / 2 - r, height / 2 + r],
        [width / 2 - r, height / 2 - r],
        [width / 2 + r, height / 2 - r]
    ]

    let key = 0

    setInterval(() => {



        if (++key == 4) key = 0


        robot.moveMouseSmooth(...rectPoints[key])
    }, 2000)
})();