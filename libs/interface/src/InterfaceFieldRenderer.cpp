//
// Created by Dawid Kulikowski on 01/12/2021.
//

#include "InterfaceFieldRenderer.h"
#include <cmath>

InterfaceFieldRenderer::InterfaceFieldRenderer(std::weak_ptr<InterfaceFieldStateStore> storage) {
    this->storage = storage;
}

void InterfaceFieldRenderer::renderBall(QPainter *painter, QRect size) {

}

void InterfaceFieldRenderer::renderField(QPainter *painter, QRect size) {

    auto info = this->storage.lock()->getState();

    auto arcs = info.field().field().field_arcs();
    auto lines = info.field().field().field_lines();

    painter->save();
    painter->setRenderHint(QPainter::RenderHint::Antialiasing, true);

    auto dPen = painter->pen();
    dPen.setWidth(1);
    dPen.setColor(Qt::white);
    painter->setPen(dPen);

    painter->translate(size.width()/2, size.height()/2);

    // Fill field color green
    painter->fillRect(painter->clipBoundingRect(), Qt::GlobalColor::darkGreen);

    for (const auto& arc : arcs) {
        auto thickness = scale * arc.thickness();
        auto center = arc.center();
        auto radius = scale * arc.radius();

        painter->drawEllipse(QPoint{(int)(scale * center.x()), (int)(scale * center.y())}, (int)radius, (int)radius);
    }

    for (const auto& line : lines) {
        auto p1 = line.p1();
        auto p2 = line.p2();
        auto thickness = scale * line.thickness();

        painter->drawLine(scale * p1.x(), scale * p1.y(), scale * p2.x(), scale * p2.y());
    }

    painter->restore();
}

void InterfaceFieldRenderer::renderRobot(QPainter *painter, QRect size, bool isYellow, int id) {
}

//void InterfaceFieldRenderer::renderPaths(QPainter *painter, QRect size) {
//    painter->save();
//    painter->setRenderHint(QPainter::RenderHint::Antialiasing, true);
//
//    auto dPen = painter->pen();
//    dPen.setWidth(1);
//    dPen.setColor(Qt::cyan);
//    painter->setPen(dPen);
//
//    painter->drawRect(0, 0, 50, 30);
//
//    painter->translate(size.width()/2, size.height()/2);
//
//    std::vector<rtt::RobotPath> yellowPaths;
//    std::vector<rtt::RobotPath> bluePaths;
//    {
//        auto storagePointer = this->storage.lock();
//        yellowPaths = storagePointer->getAIData(rtt::Team::YELLOW).robotPaths;
//        bluePaths = storagePointer->getAIData(rtt::Team::BLUE).robotPaths;
//    }
//
//    for (const auto& path : yellowPaths) {
//        auto beginIt = path.path.begin();
//        auto nextIt = std::next(beginIt);
//
//        for (const auto& point : path.path) {
//            std::cout << "{" << point.x << "," << point.y << "},";
//        } std::cout << std::endl;
//    }
//
//
////        while (beginIt != path.path.end() && nextIt != path.path.end()) {
////            QPoint begin(static_cast<int>(this->scale * (*beginIt).x), static_cast<int>(this->scale * (*beginIt).y));
////            QPoint end(static_cast<int>(this->scale * (*nextIt).x), static_cast<int>(this->scale * (*nextIt).y));
////
////            painter->drawLine(begin, end);
////
////            beginIt = nextIt;
////            std::advance(nextIt, 1);
////        }
//
//    painter->restore();
//}

void InterfaceFieldRenderer::updateScale(int canvasWidth, int canvasHeight, double fieldWidth, double fieldHeight) {
    if (fieldWidth == 0 || fieldHeight == 0) this->scale = 1;

    double w_scale = static_cast<double>(canvasWidth) / fieldWidth;
    double h_scale =  static_cast<double>(canvasHeight) / fieldHeight;

    this->scale = std::fmin(w_scale, h_scale);
}


