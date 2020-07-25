import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { MenuService } from '../services/menu.service';
import * as MenuActions from '../actions/menu.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class MenuEffects {
  // LoadMenus$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(MenuActions.LoadMenus),
  //     switchMap(() =>
  //        ofType(MenuActions.LoadMenus),
  //         // map((menus: any[]) => MenuActions.LoadMenusSucces({ menus })),
  //         // catchError(error => of(MenuActions.ErrorAction({ error })))
  //       )
  //     )
  //   )
  // );

  @Effect()
  index = this.actions$.pipe(
    tap(() => {
      // console.log('Busca do menu', 222);
    }),
    ofType(MenuActions.LoadMenus),
    switchMap((action: any) =>
      this.dataService.index(action.payload).pipe(
        tap(res => {
          // console.log('Busca do menu', res);
        }),
        switchMap(res => [MenuActions.LoadMenusSucces({ payload: res })]),
        catchError(error => of(MenuActions.ErrorAction(error)))
      )
    )
  );

  constructor(private actions$: Actions, private dataService: MenuService) {}
}
