//
// Created by Dawid Kulikowski on 09/08/2021.
//

#ifndef RTT_INTERFACEDECLARATIONS_H
#define RTT_INTERFACEDECLARATIONS_H

#include <proto/UiOptions.pb.h>

#include <nlohmann/json.hpp>
#include <utility>

#include "InterfaceDeclaration.h"

namespace rtt::Interface {
class InterfaceDeclarations {
   private:
       // Duplicate path for ease of use
       std::map<std::string, InterfaceDeclaration> decls;

       mutable std::mutex mtx;

       std::atomic_bool did_change;

   public:
       ~InterfaceDeclarations() = default;

       InterfaceDeclarations(InterfaceDeclarations&&) = delete;
       InterfaceDeclarations& operator=(InterfaceDeclarations&&) = delete;


       InterfaceDeclarations(const InterfaceDeclarations&) = delete;
       InterfaceDeclarations& operator=(const InterfaceDeclarations&) = delete;

       InterfaceDeclarations() = default;
       explicit InterfaceDeclarations(std::map<std::string, InterfaceDeclaration> vec) : decls(std::move(vec)) {};
       explicit InterfaceDeclarations(const std::vector<InterfaceDeclaration>& vec) {
           for (const auto& val : vec) {
               this->decls.insert_or_assign(val.path, val);
           }
       }

       [[maybe_unused]] void addDeclaration(InterfaceDeclaration) noexcept;
       [[maybe_unused]] void removeDeclaration(std::string) noexcept;

       std::map<std::string, InterfaceDeclaration> getDeclarations() const noexcept;
       std::optional<InterfaceDeclaration> getDeclaration(std::string) const noexcept;

       void handleData(const proto::UiOptionDeclarations&) noexcept;

       proto::UiOptionDeclarations toProto() const noexcept;

       bool getDidChange();
};

}
#endif  // RTT_INTERFACEDECLARATIONS_H