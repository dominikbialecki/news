import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiImageComponent } from './ui-image.component';

@NgModule({
    declarations: [UiImageComponent],
    exports: [
        UiImageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UiImageModule {
}
