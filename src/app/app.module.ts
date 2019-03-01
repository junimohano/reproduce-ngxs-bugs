import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const ngxsModules = [
  NgxsModule.forRoot([], { developmentMode: !environment.production })
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...ngxsModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
