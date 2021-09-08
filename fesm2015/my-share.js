import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import concat from 'lodash.concat';

class MyShareService {
    constructor() { }
    doSomething() {
        console.log('Llamado desde la libreria :D');
        // Make sure tree shaking won't remove the lib during the build
        console.log(concat([1], 2));
    }
}
MyShareService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyShareService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyShareComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyShareComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyShareComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: MyShareComponent, selector: "lib-my-share", ngImport: i0, template: `
    <p>
      my-share works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-share',
                    template: `
    <p>
      my-share works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class MyShareModule {
}
MyShareModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyShareModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareModule, declarations: [MyShareComponent], exports: [MyShareComponent] });
MyShareModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: MyShareModule, decorators: [{
            type: NgModule,
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

export { MyShareComponent, MyShareModule, MyShareService };
//# sourceMappingURL=my-share.js.map
