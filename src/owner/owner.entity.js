"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Owner = void 0;
var startup_entity_1 = require("../startup/startup.entity");
var testimony_entity_1 = require("../testimony/testimony.entity");
var typeorm_1 = require("typeorm");
var Owner = /** @class */ (function () {
    function Owner() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Owner.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Owner.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Owner.prototype, "age");
    __decorate([
        (0, typeorm_1.Column)()
    ], Owner.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)()
    ], Owner.prototype, "image");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return startup_entity_1.Startup; }, function (startup) { return startup.owners; })
    ], Owner.prototype, "startup");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return testimony_entity_1.Testimony; }, function (testimony) { return testimony.owner; })
    ], Owner.prototype, "testimonies");
    Owner = __decorate([
        (0, typeorm_1.Entity)()
    ], Owner);
    return Owner;
}());
exports.Owner = Owner;
