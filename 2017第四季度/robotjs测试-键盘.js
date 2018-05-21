setTimeout(() => {

// Type "Hello World" then press enter.
    let robot = require("robotjs");

// Type "Hello World".
    robot.typeString("Hello World");

// Press enter.
    robot.keyTap("enter");
}, 2000);
