// Move the mouse across the screen as a sine wave.
const robot = require("robotjs");

// Speed up the mouse.
//Sets the delay in milliseconds to sleep after a mouse event. This is 10ms by default.
robot.setMouseDelay(2);

const twoPI = Math.PI * 2.0;
const screenSize = robot.getScreenSize();
const height = screenSize.height;
const width = screenSize.width;
console.log(`screen:\nwidth:${screenSize.width}  height:${screenSize.height}`);

for (let x = 0; x < width; x++) {
    let y = -height / 2 * Math.sin((twoPI * x) / width) + height / 2;
    robot.moveMouse(x, y);  //移动到..
}