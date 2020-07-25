import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ɵConsole,
} from '@angular/core';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { select, Store } from '@ngrx/store';
import { merge, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UtilsService } from '../../../core/utils.service';

import * as MenuActions from '../../../store/actions/menu.actions';
import * as fromMenus from '../../../store/reducers/menu.reducers';

@Component({
  selector: 'fuse-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuseNavigationComponent implements OnInit {
  @Input()
  layout = 'vertical';

  @Input()
  navigation: any;
  menuSistema: any = [];

  menus$: Observable<any>;
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {FuseNavigationService} _fuseNavigationService
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseNavigationService: FuseNavigationService,
    private _store: Store<fromMenus.MenuState>,
    private _utilsService: UtilsService
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // // Load the navigation either from the input or from the service
    // this.navigation = this.navigation || this._fuseNavigationService.getCurrentNavigation();

    // // Subscribe to the current navigation changes
    // this._fuseNavigationService.onNavigationChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
    //   // Load the navigation
    //   this.navigation = this._fuseNavigationService.getCurrentNavigation();

    //   // Mark for check
    //   this._changeDetectorRef.markForCheck();
    // });
    this.onGetMenu();
    // Subscribe to navigation item
    merge(
      this._fuseNavigationService.onNavigationItemAdded,
      this._fuseNavigationService.onNavigationItemUpdated,
      this._fuseNavigationService.onNavigationItemRemoved
    )
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  onGetMenu() {
    this.menus$ = this._store.pipe(select(fromMenus.selectMenuList));
    this._store.dispatch(MenuActions.LoadMenus());

    this.menus$.pipe(takeUntil(this._unsubscribeAll)).subscribe((data: any) => {
      if (data) {
        console.log('DATAAAA', this.navigation || this._fuseNavigationService.getCurrentNavigation());
        const menu = JSON.parse(JSON.stringify(data));
        let children: any = [];

        // GERA O MENU
        for (let item of menu) {
          // VERIFICA SE O ITEM É PAI
          if (!item.idpai) {
            //DELETA A PROPRIEDADE URL

            //VERIFICA SE O PAI POSSUI FILHOS
            children = menu.filter((c: any) => {
              return c.idpai === item.IDG032;
            });

            // SE TIVER OS children SÃO INSERIDOS
            if (children.length > 0) {
              console.log(item.title, children.length, 'sub-menus');
              const subItems: any = [];

              children.forEach((element: any) => {
                subItems.push(this.itemTransform(element));
              });

              item.children = subItems;
            }

            const menuItem = this.itemTransform(item);

            this.menuSistema.push(menuItem);
          }
        }
        this.navigation = this.menuSistema;
        this._changeDetectorRef.markForCheck();
      }
    });
  }

  itemTransform(item) {
    if (item.type === '1') {
      item.type = 'collapsable';
    } else {
      console.log('TYPE', item.type);
      item.type = 'item';
    }

    if (!item.url) {
      delete item.url;
    }

    return {
      createdAt: item.CREATED,
      updatedAt: item.UPDATED,
      icon: item.icon,
      id: item.IDG033,
      index: item.ordem,
      parentId: item.idpai,
      status: true,
      title: item.title,
      idType: item.type,
      type: item.type,
      url: item.url,
      children: item.children,
    };
  }

  onGetMenu2() {
    this.menus$ = this._store.pipe(select(fromMenus.selectMenuList));
    this._store.dispatch(MenuActions.LoadMenus());

    this.menus$.pipe(takeUntil(this._unsubscribeAll)).subscribe((data: any) => {
      if (data) {
        console.log('DATAAAA', data);
        const menu = JSON.parse(JSON.stringify(data));

        let children: any = [];

        // GERA O MENU
        for (let item of menu) {
          // console.log('==>', item);
          if (item.type == 1) {
            item.type = 'collapse';
          } else {
            item.type = 'item';
          }

          // VERIFICA SE O ITEM É PAI
          if (!item.idpai) {
            //DELETA A PROPRIEDADE URL
            if (!item.url) {
              delete item.url;
            }

            //VERIFICA SE O PAI POSSUI FILHOS
            children = menu.filter(c => {
              return c.idpai === item.IDG032;
            });

            // SE TIVER OS children SÃO INSERIDOS
            if (children.length > 0) {
              item.children = children;
            }
            item.id = item.IDG033;
            this.menuSistema.push(item);
          }
        }
        this.navigation = this._utilsService.formatData(this.menuSistema);
        this.navigation = this.menuSistema;
        console.log(this.menuSistema);
        this._changeDetectorRef.markForCheck();
      }
    });
  }
}
