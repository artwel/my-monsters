import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

// Routing
import { AuthguardService } from './authguard.service';
import { routes } from './app.routes';

// Material
import {MdGridListModule, MdButtonModule, MdIconModule} from '@angular/material';

export const firebaseConfig = {
  apiKey: 'AIzaSyBq5JLBT2KjTXvU0OO-TSYSvq7PJz0lmq8',
  authDomain: 'my-monsters.firebaseapp.com',
  databaseURL: 'https://my-monsters.firebaseio.com',
  storageBucket: 'my-monsters.appspot.com',
  messagingSenderId: '572945147584'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes,
    MdGridListModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
