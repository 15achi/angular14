import{NgModule} from "@angular/core";
import{MatCardModule} from "@angular/material/card";
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import{MatTableModule} from "@angular/material/table";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
    exports:[
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSelectModule,
        MatNativeDateModule
    ]
})
export class MaterialModule{

}