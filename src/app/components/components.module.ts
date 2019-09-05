import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';
import { MenuComponent } from './shared/menu/menu.component';

import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CuckComponent } from './cuck/cuck.component';

@NgModule({
    declarations: [
        TablesComponent,
        MenuComponent,
        FormComponent,
        CuckComponent
    ],
    imports: [ CommonModule,RouterModule ],
    exports: [  
        TablesComponent,
        MenuComponent,
        CuckComponent
    ],
    providers: [],
})
export class ComponentModule {
}  