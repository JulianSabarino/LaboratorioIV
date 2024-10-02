import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './pages/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp(
        {"projectId":"colmenasdragones",
          "appId":"1:952973006976:web:e2ef32bf9f3b4d4ccb6e65",
          "storageBucket":"colmenasdragones.appspot.com",
          "apiKey":"AIzaSyDMTqAf3uZ2b9vfX7IFw34fTSqTRfMAUSo",
          "authDomain":"colmenasdragones.firebaseapp.com",
          "messagingSenderId":"952973006976"})),
           provideAuth(() => getAuth()),
           provideFirestore(() => getFirestore())]
};