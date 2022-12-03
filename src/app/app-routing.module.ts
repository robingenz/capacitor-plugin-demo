import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'app-update',
    loadChildren: () =>
      import('./modules/app-update/app-update.module').then(
        m => m.AppUpdatePageModule,
      ),
  },
  {
    path: 'android-battery-optimization',
    loadChildren: () =>
      import(
        './modules/android-battery-optimization/android-battery-optimization.module'
      ).then(m => m.AndroidBatteryOptimizationPageModule),
  },
  {
    path: 'android-foreground-service',
    loadChildren: () =>
      import(
        './modules/android-foreground-service/android-foreground-service.module'
      ).then(m => m.AndroidForegroundServicePageModule),
  },
  {
    path: 'background-task',
    loadChildren: () =>
      import('./modules/background-task/background-task.module').then(
        m => m.BackgroundTaskPageModule,
      ),
  },
  {
    path: 'badge',
    loadChildren: () =>
      import('./modules/badge/badge.module').then(m => m.BadgePageModule),
  },
  {
    path: 'cloudinary',
    loadChildren: () =>
      import('./modules/cloudinary/cloudinary.module').then(
        m => m.CloudinaryPageModule,
      ),
  },
  {
    path: 'datetime-picker',
    loadChildren: () =>
      import('./modules/datetime-picker/datetime-picker.module').then(
        m => m.DatetimePickerPageModule,
      ),
  },
  {
    path: 'file-opener',
    loadChildren: () =>
      import('./modules/file-opener/file-opener.module').then(
        m => m.FileOpenerPageModule,
      ),
  },
  {
    path: 'file-picker',
    loadChildren: () =>
      import('./modules/file-picker/file-picker.module').then(
        m => m.FilePickerPageModule,
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'keep-awake',
    loadChildren: () =>
      import('./modules/keep-awake/keep-awake.module').then(
        m => m.KeepAwakePageModule,
      ),
  },
  {
    path: 'managed-configurations',
    loadChildren: () =>
      import(
        './modules/managed-configurations/managed-configurations.module'
      ).then(m => m.ManagedConfigurationsPageModule),
  },
  {
    path: 'photo-editor',
    loadChildren: () =>
      import('./modules/photo-editor/photo-editor.module').then(
        m => m.PhotoEditorPageModule,
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
    path: 'screen-orientation',
    loadChildren: () =>
      import('./modules/screen-orientation/screen-orientation.module').then(
        m => m.ScreenOrientationPageModule,
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
