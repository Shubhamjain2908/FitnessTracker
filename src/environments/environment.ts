// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAyaM6nnUVCVyrtqDTBhgxl52-a5KSt7KA',
    authDomain: 'fitness-tracker-bb851.firebaseapp.com',
    databaseURL: 'https://fitness-tracker-bb851.firebaseio.com',
    projectId: 'fitness-tracker-bb851',
    storageBucket: 'fitness-tracker-bb851.appspot.com',
    messagingSenderId: '713454766332'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
