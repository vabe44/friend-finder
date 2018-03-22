import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatsScreenComponent } from './stats-screen/stats-screen.component';
import { FriendCardComponent } from './friend-card/friend-card.component';
import { MessagesScreenComponent } from './messages-screen/messages-screen.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

const appRoutes: Routes = [
  { path: '', component: FriendCardComponent },
  { path: 'loading', component: SplashScreenComponent },
  { path: 'stats', component: StatsScreenComponent },
  { path: 'messages', component: MessagesScreenComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    NavbarComponent,
    StatsScreenComponent,
    FriendCardComponent,
    MessagesScreenComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
