/**
 * Action to add one item.
 */
export class AddItem {
  static readonly type = '[App] Add item';
}

/**
 * Action to change the text.
 */
export class ChangeText {
  static readonly type = '[App] Change text';
  constructor(public payload: string) {
  }
}
