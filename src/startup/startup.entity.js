"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Startup = void 0;
var owner_entity_1 = require("../owner/owner.entity");
var typeorm_1 = require("typeorm");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Startup.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Startup.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Startup.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)()
    ], Startup.prototype, "field");
    __decorate([
        (0, typeorm_1.Column)()
    ], Startup.prototype, "logo");
    __decorate([
        (0, typeorm_1.Column)()
    ], Startup.prototype, "turnover");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return owner_entity_1.Owner; }, function (owner) { return owner.startup; })
    ], Startup.prototype, "owners");
    Startup = __decorate([
        (0, typeorm_1.Entity)()
    ], Startup);
    return Startup;
}());
exports.Startup = Startup;
