import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  id: any;
  job: any;
  requirments: any;
  doings: any;
  benefits: any;
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getJobDetails(this.id).subscribe(job => {
      this.job = job;
    });


    this.firebaseService.getJobRequirments(this.id).subscribe(requirments => {
      this.requirments = requirments;
    });

    this.firebaseService.getJobDoings(this.id).subscribe(doings => {
      this.doings = doings;
    });

    this.firebaseService.getJobBenefits(this.id).subscribe(benefits => {
      this.benefits = benefits;
    })
  }

}
