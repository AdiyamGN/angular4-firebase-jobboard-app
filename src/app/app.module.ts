import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment.prod';

import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { AddjobComponent } from './components/addjob/addjob.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'addjob', component: AddjobComponent},
  {path: 'job-detail/:id', component: JobDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    JobsComponent,
    JobDetailComponent,
    FooterComponent,
    AddjobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
