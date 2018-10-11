const robot = require("robotjs");

setTimeout(x => {
    setInterval(x => {
        robot.mouseClick();
    }, 1000)
}, 10 * 1000)