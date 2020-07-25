import { createAction, props } from '@ngrx/store';

export const LoadMenus = createAction('[Menus] - Begin Get Menus');

export const LoadMenusSucces = createAction('[Menus] - Success Get Menu', props<{ payload?: any }>());
export const ErrorAction = createAction('[Menu] - Error', props<Error>());
export const loadBooksSuccess = createAction('[Collection/API] Load Books Success', props<{ books: any[] }>());
