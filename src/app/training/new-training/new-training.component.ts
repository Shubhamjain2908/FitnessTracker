import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../training.service';
import {ExerciseModel} from '../exercise.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  excerises: ExerciseModel[];
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.excerises = this.trainingService.getAvailableExcercises();
  }

  onStartTraining(f: NgForm) {
    this.trainingService.startExercise(f.value.exercise);
  }
}
