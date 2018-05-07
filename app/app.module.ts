import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SquadGuardService } from './squad/squad-guard.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamsComponent } from './teams/teams.component';
import { TitleComponent } from './share/title.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { SquadComponent } from './squad/squad.component';
import { SquaddetailsComponent } from './squad/squaddetails.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, 
                  RouterModule.forRoot(
                    [{path : 'teams' , component : TeamsComponent},
                     {path : 'points-table' , component : PointsTableComponent},
                     {path : 'squad' , component : SquadComponent},
                     { path: 'squad/:team',canActivate: [ SquadGuardService ],component: SquaddetailsComponent },
                     {path: 'home' , component : WelcomeComponent},
                     { path: '', redirectTo: 'home', pathMatch: 'full'},
                     { path: '**', redirectTo: 'home', pathMatch: 'full'}])],
  declarations: [ AppComponent, WelcomeComponent, TeamsComponent, TitleComponent, PointsTableComponent, SquadComponent, SquaddetailsComponent],
  bootstrap:    [ AppComponent ],
  providers : [SquadGuardService]
})
export class AppModule { }
