//
// Created by Dawid Kulikowski on 28/12/2021.
//

#include "InterfaceFieldView.h"

InterfaceFieldView::InterfaceFieldView(std::weak_ptr<InterfaceFieldStateStore> state, QWidget* parent): QGraphicsView(parent), state(state) {
    this->setCacheMode(CacheModeFlag::CacheBackground);

    //    this->setViewportUpdateMode(ViewportUpdateMode::FullViewportUpdate);
    this->setViewportUpdateMode(QGraphicsView::SmartViewportUpdate);
    this->setDragMode(QGraphicsView::NoDrag);
    this->setOptimizationFlag(QGraphicsView::DontSavePainterState);

    this->resetCachedContent();
}

void InterfaceFieldView::drawBackground(QPainter *painter, const QRectF &rect) {
    if (auto availableState = this->state.lock()) {
        this->renderer.renderField(painter, availableState->getState(), rect.toRect());
    }
}

void InterfaceFieldView::resizeEvent(QResizeEvent* event) {
    if (scene()) {
        scene()->setSceneRect(viewport()->rect());
    }


    QGraphicsView::resizeEvent(event);
}