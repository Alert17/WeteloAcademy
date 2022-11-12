var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Types;
(function (Types) {
    Types["client"] = "client";
    Types["admin"] = "admin";
})(Types || (Types = {}));
var Creator = /** @class */ (function () {
    function Creator() {
    }
    return Creator;
}());
var ClientCreator = /** @class */ (function (_super) {
    __extends(ClientCreator, _super);
    function ClientCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientCreator.prototype.factoryMethod = function (name) {
        return new Client(name, Types.client);
    };
    ClientCreator.prototype.userInfo = function (name) {
        var user = this.factoryMethod(name);
        return "Username: ".concat(user.name, ", type: ").concat(user.type, ";");
    };
    return ClientCreator;
}(Creator));
var AdminCreator = /** @class */ (function (_super) {
    __extends(AdminCreator, _super);
    function AdminCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminCreator.prototype.factoryMethod = function (name) {
        return new Admin(name, Types.admin);
    };
    AdminCreator.prototype.userInfo = function (name) {
        var user = this.factoryMethod(name);
        return "Username: ".concat(user.name, ", type: ").concat(user.type, ";");
    };
    return AdminCreator;
}(Creator));
var Client = /** @class */ (function () {
    function Client(name, type) {
        this.name = name;
        this.type = type;
    }
    return Client;
}());
var Admin = /** @class */ (function () {
    function Admin(name, type) {
        this.name = name;
        this.type = type;
    }
    return Admin;
}());
var user = new ClientCreator().userInfo('Alert');
console.log(user);
