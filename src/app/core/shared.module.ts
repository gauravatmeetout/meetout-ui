import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";

@NgModule({
    declarations: [
    ],
    exports: [
        HttpClientModule,
        CommonModule
    ],
    imports: [
        CommonModule  
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [UserService,AuthService],
        }
    }

}