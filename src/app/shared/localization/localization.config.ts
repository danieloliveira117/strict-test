import { L10nConfig, L10nLoader, L10nLocale } from 'angular-l10n';
import { environment } from 'src/environments/environment';

/** Creates a en-GB locale. */
export const EN_GB_LOCALE: () => L10nLocale = (): L10nLocale => ({
    language: 'en-GB',
    currency: 'GBP',
    timeZone: 'Europe/London'
} as const);

const createConfiguration: (fallback: boolean, cache: boolean) => L10nConfig = (fallback: boolean, cache: boolean): L10nConfig => ({
    format: 'language-region',
    providers: [
        {
            name: 'app',
            asset: './assets/l10n/locale',
            options: {
                version: environment.applicationVersion
            }
        }
    ],
    fallback: fallback,
    cache: cache,
    keySeparator: '.',
    defaultLocale: EN_GB_LOCALE(),
    schema: [
        {
            locale: EN_GB_LOCALE(),
            dir: 'ltr',
            text: 'Great Britain'
        }
    ],
    defaultRouting: true
});

/**
 * Localization library object.
 */
export const l10nConfig: L10nConfig = createConfiguration(false, true);

/**
 * Test localization library object.
 */
export const l10nTestConfig: L10nConfig = createConfiguration(false, false);

/**
 * Initialization function for the localization library.
 * @param l10nLoader the translations loader service loader.
 * @return a function that will call the loader.
 */
export const initL10n: (l10nLoader: L10nLoader) => () => Promise<void> = (l10nLoader: L10nLoader): () => Promise<void> =>
    (): Promise<void> => l10nLoader.init();
