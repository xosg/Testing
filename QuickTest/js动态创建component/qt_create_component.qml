import QtQuick 2.2
import QtQuick.Controls 1.2

Rectangle {
    id: rootItem
    width: 360
    height: 300
    property int count: 0
    property Component component: null

    Flow {
        flow: Flow.TopToBottom
        id: main
        anchors.fill: parent
        anchors.margins: 4
        spacing: 10
    }

    function changeTextColor(clr) {
        coloredText.color = clr
    }

    function createColorPicker(clr) {
        if (rootItem.component == null) {
            rootItem.component = Qt.createComponent("ColorPicker.qml")
        }
        var colorPicker
        if (rootItem.component.status == Component.Ready) {
            colorPicker = rootItem.component.createObject(main, {
                                                              "color": clr,
                                                              "x": rootItem.count * 55,
                                                              "y": 10
                                                          })
            colorPicker.colorPicked.connect(rootItem.changeTextColor)
        }

        rootItem.count++
    }

    Button {
        id: add
        text: "add"
        anchors.left: parent.left
        anchors.leftMargin: 4
        anchors.bottom: parent.bottom
        anchors.bottomMargin: 4
        onClicked: {
            createColorPicker(Qt.rgba(Math.random(), Math.random(),
                                      Math.random(), 1))
        }
    }
}
