import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.scss']
})
export class AddjobComponent implements OnInit {

  title: any;
  company: any;
  location: any;
  salary: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    let job = {
      title: this.title,
      company: this.company,
      location: this.location,
      salary: this.salary
    }

    this.firebaseService.addJob(job);

    this.router.navigate(['jobs']);
  }

}
