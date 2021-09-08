(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lodash.concat')) :
    typeof define === 'function' && define.amd ? define('my-share', ['exports', '@angular/core', 'lodash.concat'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-share'] = {}, global.ng.core, global.concat));
}(this, (function (exports, i0, concat) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var concat__default = /*#__PURE__*/_interopDefaultLegacy(concat);

    var MyShareService = /** @class */ (function () {
        function MyShareService() {
        }
        MyShareService.prototype.doSomething = function () {
            console.log('Llamado desde la libreria :D');
            // Make sure tree shaking won't remove the lib during the build
            console.log(concat__default['default']([1], 2));
        };
        return MyShareService;
    }());
    MyShareService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MyShareService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MyShareComponent = /** @class */ (function () {
        function MyShareComponent() {
        }
        MyShareComponent.prototype.ngOnInit = function () {
        };
        return MyShareComponent;
    }());
    MyShareComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MyShareComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: MyShareComponent, selector: "lib-my-share", ngImport: i0__namespace, template: "\n    <p>\n      my-share works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-share',
                        template: "\n    <p>\n      my-share works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var MyShareModule = /** @class */ (function () {
        function MyShareModule() {
        }
        return MyShareModule;
    }());
    MyShareModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MyShareModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareModule, declarations: [MyShareComponent], exports: [MyShareComponent] });
    MyShareModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: MyShareModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MyShareComponent
                        ],
                        imports: [],
                        exports: [
                            MyShareComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of my-share
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyShareComponent = MyShareComponent;
    exports.MyShareModule = MyShareModule;
    exports.MyShareService = MyShareService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-share.umd.js.map
