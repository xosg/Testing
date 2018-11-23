import QtQuick 2.0

Rectangle {
    id: rootItem
    color: '#eee'
    anchors.fill: parent
    property var date: new Date()

    Timer {
        interval: 1000
        repeat: true
        running: true
        onTriggered: {
            date = new Date()
        }
    }

    Rectangle {
        id: rect
        width: 80
        height: 60
        x: 20
        y: 20
        color: "black"
        Text {
            id: text
            color: 'white'
            text: date.toTimeString()
            //            font.family: ''
            anchors.centerIn: parent
        }
    }

    ParallelAnimation {
        id: parallel
        SmoothedAnimation {
            id: smoothX
            target: rect
            property: "x"
            duration: 1000
            velocity: -1
        }

        SmoothedAnimation {
            id: smoothY
            target: rect
            property: "y"
            //            velocity: 100
            duration: 1000
            velocity: -1
        }
    }

    MouseArea {
        anchors.fill: parent
        onClicked: {
            smoothX.from = rect.x
            smoothX.to = mouse.x - rect.width / 2
            //            smoothX.start()
            smoothY.from = rect.y
            smoothY.to = mouse.y - rect.height / 2
            //            smoothY.start()
            parallel.start()
        }
    }
}
