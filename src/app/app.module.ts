import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { GenerateComponent } from './generate/generate.component';
import { AccountComponent } from './main/account/account.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'main', component: MainComponent },
  { path: 'generate', component: GenerateComponent },
  { path: '**', redirectTo: '/landing' } // Redirect any undefined route to landing 
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MainComponent,
    GenerateComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
