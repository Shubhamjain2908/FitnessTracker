export interface ExerciseModel {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;  // '?' is used for optional fields
  state?: 'completed' | 'cancelled' | null;
}
