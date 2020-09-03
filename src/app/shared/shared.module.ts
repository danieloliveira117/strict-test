import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { L10nTranslationModule, L10nIntlModule } from 'angular-l10n';

/**
 * Shared functionality module.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    L10nTranslationModule,
    L10nIntlModule
  ]
})
export class SharedModule { }
