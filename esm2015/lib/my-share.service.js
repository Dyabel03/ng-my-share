import { Injectable } from '@angular/core';
import concat from 'lodash.concat';
import * as i0 from "@angular/core";
export class MyShareService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2hhcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LXNoYXJlL3NyYy9saWIvbXktc2hhcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sTUFBTSxNQUFNLGVBQWUsQ0FBQzs7QUFLbkMsTUFBTSxPQUFPLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7SUFFakIsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUU1QywrREFBK0Q7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzNCLENBQUM7OzJHQVRRLGNBQWM7K0dBQWQsY0FBYyxjQUZiLE1BQU07MkZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY29uY2F0IGZyb20gJ2xvZGFzaC5jb25jYXQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNeVNoYXJlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBkb1NvbWV0aGluZygpIHtcbiAgICBjb25zb2xlLmxvZygnTGxhbWFkbyBkZXNkZSBsYSBsaWJyZXJpYSA6RCcpO1xuICAgIFxuICAgIC8vIE1ha2Ugc3VyZSB0cmVlIHNoYWtpbmcgd29uJ3QgcmVtb3ZlIHRoZSBsaWIgZHVyaW5nIHRoZSBidWlsZFxuICAgIGNvbnNvbGUubG9nKGNvbmNhdChbMV0sIDIpKVxuICAgIH1cbn1cbiJdfQ==