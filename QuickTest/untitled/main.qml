//import QtQuick 2.9
//import QtQuick.Window 2.2
//import QtQuick.Controls 1.4

//import QtQuick.Controls.Material 2.1

//Window {

//    FontLoader {
//        name: 'youyuan'
//        source: "./youyuan.ttf"
//    }

//    title: body.font.family

//    x: 100
//    y: 100

//    visible: true
//    Material.theme: Material.Dark
//    Material.accent: Material.Purple
//    width: 400
//    height: 400
//    Rectangle {

//        width: parent.width
//        height: 300
//        color: "blue"
//        //        transform: Rotation {
//        //            origin.x: 25
//        //            origin.y: 25
//        //            angle: 45
//        //        }
//        Text {
//            id: body
//            text: textInput.text
//            width: parent.width
//            color: 'white'
//            font.pixelSize: 20
//            font.family: 'youyuan'
//            wrapMode: Text.WrapAnywhere
//        }
//    }

//    TextField {
//        id: textInput
//        placeholderText: qsTr("Enter name")
//        textColor: 'black'
//        anchors.bottom: parent.bottom
//        anchors.horizontalCenter: parent.horizontalCenter
//    }
//}
import QtQuick 2.0
import QtQuick.Controls 2.1
import QtQuick.Controls.Material 2.1

ApplicationWindow {
    visible: true

    Material.theme: Material.Dark
    Material.accent: Material.Purple

    Column {
        anchors.centerIn: parent

        RadioButton {
            text: qsTr("Small")
        }
        RadioButton {
            text: qsTr("Medium")
            checked: true
        }
        RadioButton {
            text: qsTr("Large")
        }
        Button {
            text: qsTr("Button")
            highlighted: true
            Material.accent: Material.Orange
        }
    }
}
