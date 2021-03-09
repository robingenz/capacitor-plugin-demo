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
    path: 'privacy-screen',
    loadChildren: () =>
      import('./modules/privacy-screen/privacy-screen.module').then(
        m => m.PrivacyScreenPageModule,
      ),
  },
  {
    path: 'text-to-speech',
    loadChildren: () => import('./modules/text-to-speech/text-to-speech.module').then( m => m.TextToSpeechPageModule)
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
