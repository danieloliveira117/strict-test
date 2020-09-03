import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppState } from './state/app.state';
import { NgxsModule } from '@ngxs/store';
import { L10nTranslationModule, L10nIntlModule, L10nLoader } from 'angular-l10n';
import { l10nTestConfig } from './shared/localization/localization.config';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([
          AppState
        ]),
        L10nTranslationModule.forRoot(l10nTestConfig),
        L10nIntlModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    const loader: L10nLoader = TestBed.inject(L10nLoader);
    await loader.init();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
