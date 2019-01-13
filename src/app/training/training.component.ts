import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {TrainingService} from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  exersiseSubscription: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exersiseSubscription = this.trainingService.exerciseChanged.subscribe(
      exersise => {
        if (exersise) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.exersiseSubscription.unsubscribe();
  }
}
