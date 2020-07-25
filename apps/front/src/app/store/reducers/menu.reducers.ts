import { Action, createReducer, on, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import * as MenuActions from '../actions/menu.actions';

export const menusFeatureKey = 'menuReducer';

export interface MenuState {
  Menus: Array<any>;
  MenuErrors: Error;
}

export const initialState: MenuState = {
  Menus: null,
  MenuErrors: null,
};

const scoreboardReducer = createReducer(
  initialState,
  on(MenuActions.LoadMenus, state => state),
  on(MenuActions.LoadMenusSucces, (state: MenuState, { payload }) => {
    return { ...state, Menus: payload };
  }),
  on(MenuActions.ErrorAction, (state: MenuState, error: Error) => {
    console.log(error);
    return { ...state, MenuErrors: error };
  })
);

export const getItems = (state: MenuState): any => {
  return state.Menus;
};

export const selectState: MemoizedSelector<object, MenuState> = createFeatureSelector<MenuState>(menusFeatureKey);

export const selectMenus = (state: MenuState) => state.Menus;

export const selectMenuList: MemoizedSelector<object, any> = createSelector(selectState, getItems);
export function reducer(state: MenuState | undefined, action: Action) {
  return scoreboardReducer(state, action);
}

// export const getCount = () =>
//   createSelector(
//     (state, props) => state.Menus]

//   );

// export const selectMenusState = createFeatureSelector<State, MenuState>(menusFeatureKey);

// export const selectBookEntitiesState = createSelector(selectMenusState, state => state.Menus);
// export const selectBookCollection = createSelector(selectMenusState, state => state.Menus);

// const menuReducer = createReducer(
//   intialState,
//   on(MenuActions.LoadMenus, state => state),
//   on(MenuActions.LoadMenusSucces, (state: MenuState, { payload }) => {
//     return { ...state, Menus: payload };
//   }),
//   on(MenuActions.ErrorAction, (state: MenuState, error: Error) => {
//     console.log(error);
//     return { ...state, MenuErrors: error };
//   })
// );

// export function reducer(state: MenuState | undefined, action: Action) {
//   return menuReducer(state, action);
// }
