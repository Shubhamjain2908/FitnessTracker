import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../training.service';
import {ExerciseModel} from '../exercise.model';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  excerises: Observable<any>;
  constructor(private trainingService: TrainingService, private db: AngularFirestore) { }

  ngOnInit() {
    this.excerises = this.db.collection('availableExercises').valueChanges();
    // this.excerises = this.trainingService.getAvailableExcercises();
  }

  onStartTraining(f: NgForm) {
    this.trainingService.startExercise(f.value.exercise);
  }
}
