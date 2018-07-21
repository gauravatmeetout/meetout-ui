import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
    ],
    exports: [
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }

}