import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { SpacexLaunchesComponent } from './spacex-launches/spacex-launches.component';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
  ],
};

bootstrapApplication(SpacexLaunchesComponent, {
  providers:[provideHttpClient()]
})