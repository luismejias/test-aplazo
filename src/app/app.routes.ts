import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import(`./app.module`).then((module) => module.AppModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import(`./modules/dashboard/dashboard.module`).then(
        (module) => module.DashboardModule
      ),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import(`./modules/heroes/heroes.module`).then(
        (module) => module.HeroesModule
      ),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import(`./modules/character/character.module`).then(
        (module) => module.CharacterModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import(`./modules/location/location.module`).then(
        (module) => module.LocationModule
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import(`./modules/episode/episode.module`).then(
        (module) => module.EpisodeModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
