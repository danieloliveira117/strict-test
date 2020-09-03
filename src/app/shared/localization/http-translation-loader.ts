import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';

import { L10nProvider, L10nTranslationLoader } from 'angular-l10n';
import { Observable } from 'rxjs';

/**
 * Custom loader for the localization assets.
 */
@Injectable()
export class HttpTranslationLoader implements L10nTranslationLoader {

  private readonly headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(@Optional() private readonly http: HttpClient) {
  }

  /**
   * Gets the localization resources.
   * @param language the requested language.
   * @param provider the localization provider.
   * @return an observable with the read resources.
   */
  get(language: string, provider: L10nProvider): Observable<{ [key: string]: any }> {
    const url: string = `${provider.asset}-${language}.json`;
    const options: any = {
      headers: this.headers,
      params: new HttpParams().set('v', provider.options.version)
    };
    return this.http.get(url, options);
  }

}
