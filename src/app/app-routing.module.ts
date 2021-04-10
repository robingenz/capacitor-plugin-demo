import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'badge',
    loadChildren: () =>
      import('./modules/badge/badge.module').then(m => m.BadgePageModule),
  },
  {
    path: 'keep-awake',
    loadChildren: () =>
      import('./modules/keep-awake/keep-awake.module').then(
        m => m.KeepAwakePageModule,
      ),
  },
  {
    path: 'privacy-screen',
    loadChildren: () =>
      import('./modules/privacy-screen/privacy-screen.module').then(
        m => m.PrivacyScreenPageModule,
      ),
  },
  {
    path: 'text-to-speech',
    loadChildren: () =>
      import('./modules/text-to-speech/text-to-speech.module').then(
        m => m.TextToSpeechPageModule,
      ),
  },
  {
    path: 'background-task',
    loadChildren: () =>
      import('./modules/background-task/background-task.module').then(
        m => m.BackgroundTaskPageModule,
      ),
  },
  {
    path: 'firebase-performance',
    loadChildren: () =>
      import('./modules/firebase-performance/firebase-performance.module').then(
        m => m.FirebasePerformancePageModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
