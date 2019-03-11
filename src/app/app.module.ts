import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { AngularFireModule } from '@angular/fire';  

var config = {
    apiKey: "AIzaSyDdeOEsCdPAs9hgqrzD6R-TNk0h8U2tyfo",
    authDomain: "componentgenerator-f25ed.firebaseapp.com",
    databaseURL: "https://componentgenerator-f25ed.firebaseio.com",
    projectId: "componentgenerator-f25ed",
    storageBucket: "componentgenerator-f25ed.appspot.com",
    messagingSenderId: "36604504216"
  };
   

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GradientComponent } from './gradient/gradient.component';
import { BoxshadowComponent } from './boxshadow/boxshadow.component';
import { PaletteComponent } from './palette/palette.component';
import { ModelComponent } from './model/model.component';


@NgModule({
  declarations: [
    AppComponent,  
    NavbarComponent,
    GradientComponent,   
    BoxshadowComponent,
    PaletteComponent,
    ModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
