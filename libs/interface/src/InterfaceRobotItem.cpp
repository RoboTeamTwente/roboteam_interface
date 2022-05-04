//
// Created by Dawid Kulikowski on 12/12/2021.
//

#include "InterfaceRobotItem.h"
#include <QGraphicsView>

#include <math.h>

void InterfaceRobotItem::paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget) {
    ////////////////////////////////////////////////////
    painter->save();
    painter->setRenderHint(QPainter::RenderHint::Antialiasing);
    if (!isYellow) {
        painter->setPen(Qt::blue);
        painter->setBrush(Qt::blue);
    } else {
        painter->setPen(Qt::yellow);
        painter->setBrush(Qt::yellow);
    }

    //std::cout << "Drawing robot" << std::endl;

    //painter->drawEllipse(QPoint{20, 20}, 20, 20);

    //painter->setPen(QPen(Qt::red, 3));
    //painter->setBrush(Qt::red);
    //painter->drawLine(20, 20, 40, 20);
    painter->restore();
}

bool InterfaceRobotItem::getIsYellow() const {
    return this->isYellow;
}

int InterfaceRobotItem::getRobotId() const {
    return this->id;
}
QRectF InterfaceRobotItem::boundingRect() const {
    return QRectF(0, 0, 40, 40);
}

void InterfaceRobotItem::triggerUpdate() {
    if (this->scene()->views().empty()) {
        return;
    }

    auto state = this->storage.lock()->getState();

    auto searchArea = isYellow ? state.last_seen_world().yellow() : state.last_seen_world().blue();
    auto us = std::find_if(searchArea.begin(), searchArea.end(), [&] (const auto& itm) {
        return itm.id() == this->id;
    });


    if (us == searchArea.end()) {
        this->setVisible(false);
        return;
    } else {
        this->setVisible(true);
    }

    double canvasCenterX = this->scene()->views()[0]->viewport()->width()/2;
    double canvasCenterY = this->scene()->views()[0]->viewport()->height()/2;

    double x = canvasCenterX + (scale * (us->pos().x()/1000)) - 20;
    double y = canvasCenterY + (scale * (us->pos().y()/1000)) - 20;

    std::cout << "Robot: " << x << ", " << y << std::endl;

    this->setTransformOriginPoint(QPoint(20 ,20));

    this->setRotation((us->angle()/M_PI) * 180);
    this->setScale((20 * scale * 4)/20);

    this->setPos(x, y);


    //        std::cout << "[" + std::to_string(id) + "]" + " X: " + std::to_string(x) + " | Y: " + std::to_string(y) + " [Yellow = " <<  std::boolalpha <<  isYellow << "]" << std::endl;
}

void InterfaceRobotItem::updateScale(double fieldWidth, double fieldHeight) {
    if (fieldWidth == 0 || fieldHeight == 0) this->scale = 0.0;

    double canvasWidth = static_cast<double>(this->scene()->views()[0]->viewport()->width());
    double canvasHeight = static_cast<double>(this->scene()->views()[0]->viewport()->height());

    double widthScale = canvasWidth / (fieldWidth/1000);
    double heightScale = canvasHeight / (fieldHeight/1000);

    std::cout << "WidthScale: c: " << canvasWidth << ", f: " << fieldWidth << " --> " << widthScale << std::endl;
    std::cout << "HeightScale: c: " << canvasHeight << ", f: " << fieldHeight << " --> " << heightScale << std::endl;

    this->scale = std::fmin(widthScale, heightScale);
}