import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { L10nTranslationModule, L10nIntlModule, L10nLoader } from 'angular-l10n';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from './state/app.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { HttpTranslationLoader } from './shared/localization/http-translation-loader';
import { l10nConfig, initL10n } from './shared/localization/localization.config';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
      collapsed: true
    }),
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    L10nTranslationModule.forRoot(l10nConfig, {
      translationLoader: HttpTranslationLoader
    }),
    L10nIntlModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
