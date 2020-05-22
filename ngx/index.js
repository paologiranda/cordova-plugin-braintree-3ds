import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Braintree = /** @class */ (function (_super) {
    __extends(Braintree, _super);
    function Braintree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Braintree.prototype.initialize = function (token) { return cordova(this, "initialize", { "platforms": ["Android"] }, arguments); };
    Braintree.prototype.setupApplePay = function (options) { return cordova(this, "setupApplePay", { "platforms": [] }, arguments); };
    Braintree.prototype.presentDropInPaymentUI = function (options) { return cordova(this, "presentDropInPaymentUI", { "platforms": ["Android"] }, arguments); };
    Braintree.pluginName = "Braintree";
    Braintree.plugin = "cordova-plugin-braintree-3ds";
    Braintree.pluginRef = "BraintreePlugin";
    Braintree.repo = "https://github.com/MedITSolutionsKurman/cordova-plugin-braintree-3ds";
    Braintree.platforms = ["Android"];
    Braintree.install = "ionic cordova plugin add https://github.com/MedITSolutionsKurman/cordova-plugin-braintree-3ds";
    Braintree.installVariables = [];
    Braintree = __decorate([
        Injectable()
    ], Braintree);
    return Braintree;
}(IonicNativePlugin));
export { Braintree };
