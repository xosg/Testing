import QtQuick 2.11

Rectangle {

    TextMetrics {
        id: textMetrics
        font.family: "Arial"
        elide: Text.ElideMiddle
        elideWidth: 100
        text: "Hello World"
    }

    Text {
        text: textMetrics.elidedText
    }
}
