import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        InlineSVGModule.forRoot()
    ],
    exports: [
        InlineSVGModule
    ]
})
export class SharedModule {
}
