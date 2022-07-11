import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySearchComponent } from './city-search.component';
import { CodeIconPipe } from 'src/app/pipes/code-icon/code-icon.pipe';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ 
    CitySearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CitySearchComponent,
  ],
})
export class CitySearchModule { }
