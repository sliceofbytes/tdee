import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TDEEComponent } from './tdee/tdee.component';
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MaterialModule ,
    NgxMaskModule.forRoot()
  ],
  declarations: [ AppComponent, TDEEComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
