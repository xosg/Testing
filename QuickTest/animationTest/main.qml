import QtQuick 2.3
import QtQuick.Window 2.2

Window {
    visible: true
    width: 300
    height: 300
    Rectangle {
        id: rect
        width: 100
        height: 100
        color: "red"

        SpringAnimation on y {
            loops: SpringAnimation.Infinite
            from: 0
            to: 100
            damping: 0.01
            epsilon: 0.005
            spring: 3
        }
    }
}
