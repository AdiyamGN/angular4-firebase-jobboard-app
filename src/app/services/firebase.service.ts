import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  jobs: FirebaseListObservable<any[]>;
  job: FirebaseObjectObservable<any[]>;
  requirments: FirebaseListObservable<any[]>;
  doings: FirebaseListObservable<any[]>;
  benefits: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getJobs() {
    this.jobs = this.db.list('/jobs') as FirebaseListObservable<Job[]>
    return this.jobs;
  }

  getJobDetails(id) {
    this.job = this.db.object('/jobs/'+id) as FirebaseObjectObservable<Job>
    return this.job;
  }

  getJobRequirments(id) {
    this.requirments = this.db.list('/jobs/'+id+'/requirments/requirment') as FirebaseListObservable<Requirments>
    return this.requirments;
  }

  getJobDoings(id) {
    this.doings = this.db.list('/jobs/'+id+'/doings/do') as FirebaseListObservable<Doings>
    return this.doings;
  }

  getJobBenefits(id) {
    this.benefits = this.db.list('/jobs/'+id+'/benefits/benefit') as FirebaseListObservable<Benefits>
    return this.benefits;
  }

  addJob(job) {
    return this.jobs.push(job);
  }

}

interface Job {
  $title?: string;
  $location?:string;
  $salary?:string;
  $intro?:string;
  $requirment?:string;
}

interface Requirments {
  $desc?: string;
}

interface Doings {
  $desc?: string;
}

interface Benefits {
  $desc?: string;
}
