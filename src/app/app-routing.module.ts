import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MessagePage } from './message/message.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'message',
    component:MessagePage
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'inscription-suite',
    loadChildren: () => import('./inscription-suite/inscription-suite.module').then( m => m.InscriptionSuitePageModule)
  },
  {
    path: 'creer-compte',
    loadChildren: () => import('./creer-compte/creer-compte.module').then( m => m.CreerComptePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'consommation',
    loadChildren: () => import('./consommation/consommation.module').then( m => m.ConsommationPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'medecin',
    loadChildren: () => import('./medecin/medecin.module').then( m => m.MedecinPageModule)
  },
  {
    path: 'new-medecin',
    loadChildren: () => import('./new-medecin/new-medecin.module').then( m => m.NewMedecinPageModule)
  },
  {
    path: 'conseils',
    loadChildren: () => import('./conseils/conseils.module').then( m => m.ConseilsPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'update-medecin',
    loadChildren: () => import('./update-medecin/update-medecin.module').then( m => m.UpdateMedecinPageModule)
  },
  {
    path: 'update-profil',
    loadChildren: () => import('./update-profil/update-profil.module').then( m => m.UpdateProfilPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
