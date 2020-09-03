import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, StateToken } from '@ngxs/store';
import { AddItem, ChangeText } from './app.actions';

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

export interface AppStateModel {
  /** The app value. */
  value: number;

  /** The app text. */
  text: string;
}

const defaults = {
  value: 0,
  text: 'Initial Text'
};

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults
})
@Injectable()
export class AppState {

  /**
   * Increments the value.
   */
  @Action(AddItem)
  add(context: StateContext<AppStateModel>): void {
    const state: AppStateModel = context.getState();

    context.patchState({
      value: state.value + 1
    });
  }

  /**
   * Returns the value.
   */
  @Selector()
  static value(state: AppStateModel) {
    return state.value;
  }

  /**
   * Increments the value.
   */
  @Action(ChangeText)
  changeText(context: StateContext<AppStateModel>, { payload }: ChangeText): void {
    context.patchState({
      text: payload
    });
  }

  /**
   * Returns the text.
   */
  @Selector()
  static text(state: AppStateModel) {
    return state.text;
  }
}
