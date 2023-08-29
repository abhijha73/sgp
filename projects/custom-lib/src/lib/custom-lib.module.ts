import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CustomLibComponent } from './custom-lib.component';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    CustomLibComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CustomLibComponent,
    SearchBoxComponent
  ]
})
export class CustomLibModule { }
