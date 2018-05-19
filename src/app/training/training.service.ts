import { ExerciseModel } from './exercise.model';
import { Subject } from 'rxjs/index';

export class TrainingService {
  exerciseChanged = new Subject<ExerciseModel>();
  private availableExercises: ExerciseModel[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];
  private runningExercise: ExerciseModel;
  private exercises: ExerciseModel[] = [];

  getAvailableExcercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next(<ExerciseModel>{...this.runningExercise});
  }

  completeExercise() {
    this.exercises.push(<ExerciseModel>{...this.runningExercise, date: new Date(), state: 'completed'});
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push(<ExerciseModel>{
      ...this.runningExercise,
      duration: this.runningExercise.duration,
      calories: this.runningExercise.duration * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }
}
