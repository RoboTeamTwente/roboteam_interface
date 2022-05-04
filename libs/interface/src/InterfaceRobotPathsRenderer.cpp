#include <InterfaceRobotPathsRenderer.h>
#include <QGraphicsView>
#include <cmath>

InterfaceRobotPathItem::InterfaceRobotPathItem(rtt::Team team, QGraphicsItem *parent)
    : QGraphicsItem(parent)
{
    this->team = team;
    this->scale = 0.0;
}

void InterfaceRobotPathItem::triggerUpdate(const std::vector<rtt::RobotPath>& paths) {
    if (this->scene()->views().empty()) {
        return;
    }

    if (!this->isVisible()) {
        this->setVisible(true);
    }

    this->paths = paths;
    this->setPos(this->scene()->views()[0]->viewport()->width()/2, this->scene()->views()[0]->viewport()->height()/2);
    this->update();

}

void InterfaceRobotPathItem::updateScale(double fieldWidth, double fieldHeight) {
    if (fieldWidth == 0 || fieldHeight == 0) this->scale = 0.0;

    double canvasWidth = static_cast<double>(this->scene()->views()[0]->viewport()->width());
    double canvasHeight = static_cast<double>(this->scene()->views()[0]->viewport()->height());

    double widthScale = canvasWidth / (fieldWidth/1000);
    double heightScale = canvasHeight / (fieldHeight/1000);

    this->scale = std::fmin(widthScale, heightScale);
}

void InterfaceRobotPathItem::paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget) {
    painter->save();

    painter->setPen(QPen(Qt::cyan, 3, Qt::SolidLine, Qt::RoundCap));

    for (const auto& path : this->paths) {
        //painter->fillRect(0, 0, 100, 80, Qt::red);

//        if (!path.path.empty()) {
//            auto begin = path.path[0];
//
//            for (int i = 1; i < path.path.size(); ++i) {
//                auto next = path.path[i];
//            }
//        }
        std::cout << "Line: (scale: " << this->scale << ") ";
        auto beginIt = path.path.begin();
        auto nextIt = std::next(beginIt);

        while (beginIt != path.path.end() && nextIt != path.path.end()) {
            QPointF begin(this->scale * beginIt->x, this->scale * beginIt->y);
            QPointF next(this->scale * nextIt->x, this->scale * nextIt->y);

            painter->drawLine(begin.x(), begin.y(), next.x(), next.y());

            std::cout << "{" << begin.x() << "/" << beginIt->x << ", " << begin.y() << "/" << beginIt->y << ", " << next.x() << "/" << nextIt->x << ", " << next.y() << "/" << nextIt->y << "}";

            beginIt = nextIt;
            std::advance(nextIt, 1);
        } std::cout << std::endl;
    }
    painter->restore();
}

QRectF InterfaceRobotPathItem::boundingRect() const {
    return QRectF(-this->scene()->views()[0]->viewport()->width(), -this->scene()->views()[0]->viewport()->height(), this->scene()->views()[0]->viewport()->width()*2, this->scene()->views()[0]->viewport()->height()*2);
}
