import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { L10nTranslationModule, L10nIntlModule, L10nLoader } from "angular-l10n";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { l10nConfig, initL10n } from './shared/localization/localization.config';
import { HttpTranslationLoader } from './shared/localization/http-translation-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    L10nTranslationModule.forRoot(l10nConfig, {
      translationLoader: HttpTranslationLoader
    }),
    L10nIntlModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
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
