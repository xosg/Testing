#include <QGuiApplication>
#include <QQuickStyle>
#include <QQmlApplicationEngine>
#include <iostream>
using namespace std;

int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);

    QGuiApplication app(argc, argv);

    QQuickStyle::setStyle("Material");

    QQmlApplicationEngine engine;
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));
    if (engine.rootObjects().isEmpty()){
        cout << "Hello World"; // 输出 Hello World
        return -1;
    }

    return app.exec();
}
