//
// Created by Dawid Kulikowski on 27/03/2022.
//

#include "InterfaceSyncedCheckableButton.h"

namespace rtt::Interface {

    InterfaceSyncedCheckableButton::InterfaceSyncedCheckableButton(const MainWindow *window, std::weak_ptr<InterfaceControllerClient> ctrl, std::string ident, QWidget* parent): QPushButton(parent), ctrl(ctrl), identity(ident) {
        QObject::connect(window, &MainWindow::valuesChanged, this, &InterfaceSyncedCheckableButton::updateValue);
        QObject::connect(this, &QPushButton::toggled, this, &InterfaceSyncedCheckableButton::didCheck);

        this->setCheckable(true);
        this->setFlat(true);
        this->setStyleSheet("QPushButton:checked { background-color: green; border: none;}");
    }

    void InterfaceSyncedCheckableButton::updateValue(std::weak_ptr<InterfaceSettings> valptr) {
        if (auto vals = valptr.lock()) {
            if(vals->getSetting(this->identity) == InterfaceValue(true)) {
                this->setChecked(true);
            } else {
                this->setChecked(false);
            }
        }
    }

    void InterfaceSyncedCheckableButton::didCheck(bool checked) {
        if(auto ctrl = this->ctrl.lock()) {
            if (auto vals = ctrl->getValues().lock()) {
                vals->setSetting(this->identity, true);
            }
        }
    }
}