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
var CreateUserFactory = /** @class */ (function () {
    function CreateUserFactory() {
    }
    CreateUserFactory.create = function (user) {
        switch (user.type) {
            case Types.admin:
                return new CreateAdminUser(user);
            case Types.client:
                return new CreateClientUser(user);
            default:
                return new CreateClientUser(user);
        }
    };
    return CreateUserFactory;
}());
var CreateAdminUser = /** @class */ (function (_super) {
    __extends(CreateAdminUser, _super);
    function CreateAdminUser(user) {
        var _this = _super.call(this) || this;
        _this.name = user.name;
        _this.type = user.type;
        return _this;
    }
    CreateAdminUser.prototype.printInfo = function () {
        console.log("Admin: ".concat(this.name));
    };
    return CreateAdminUser;
}(CreateUserFactory));
var CreateClientUser = /** @class */ (function (_super) {
    __extends(CreateClientUser, _super);
    function CreateClientUser(user) {
        var _this = _super.call(this) || this;
        _this.name = user.name;
        _this.type = user.type;
        return _this;
    }
    CreateClientUser.prototype.printInfo = function () {
        console.log("Client: ".concat(this.name));
    };
    return CreateClientUser;
}(CreateUserFactory));
var user1 = CreateUserFactory.create({ name: 'Jordan', type: Types.admin });
var user2 = CreateUserFactory.create({ name: 'Mike', type: Types.client });
user1.printInfo();
user2.printInfo();
