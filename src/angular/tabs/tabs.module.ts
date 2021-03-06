import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormElementsModule} from "../form-elements/form-elements.module";
import {TabsComponent} from "./tabs.component";
import { TabComponent } from './children/tab.component';

@NgModule({
    declarations: [
        TabsComponent,
        TabComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TabsComponent,
        TabComponent
    ]
})
export class TabsModule {
}
