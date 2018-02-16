import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { myRouter } from './app.routing';

@NgModule({
  declarations: [
    //AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginComponent,
    myRouter,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    RootComponent
  ]
})
export class AppModule { }
