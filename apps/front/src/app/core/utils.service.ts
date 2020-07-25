import { Injectable, EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import * as arrayToTree from 'array-to-tree';
import { FuseNavigation } from '../@fuse/types/fuse-navigation';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  paginatorWasChanged = new EventEmitter<any>();

  routes: FuseNavigation[] = [];

  constructor() {}

  hasRequiredField(abstractControl: AbstractControl): boolean {
    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  }

  setValuesForm(form: FormGroup, item: any, exceptions = []): void {
    const keys = Object.keys(form.getRawValue());
    for (let i = 0; i < keys.length; i++) {
      if (!exceptions.includes(keys[i])) {
        if (form.get(keys[i])) {
          form.get(keys[i]).setValue(item[keys[i]]);
        }
      }
    }
  }

  enableForm(form: FormGroup, exceptions: Array<string>): void {
    const keys = Object.keys(form.getRawValue());

    for (let i = 0; i < keys.length; i++) {
      if (!exceptions.includes(keys[i])) {
        form.get(keys[i]).enable();
      }
    }
  }

  disableForm(form: FormGroup, exceptions: Array<string>): void {
    const keys = Object.keys(form.getRawValue());

    for (let i = 0; i < keys.length; i++) {
      if (!exceptions.includes(keys[i])) {
        form.get(keys[i]).disable();
      }
    }
  }

  markFormTouched(form: FormGroup): void {
    const keys = Object.keys(form.getRawValue());

    for (const key of keys) {
      form.get(key).markAsTouched();
    }
  }

  validateFilePdf(file): boolean {
    const mimeType = file.type;
    if (mimeType.match(/application\/pdf/)) {
      return true;
    } else {
      return false;
    }
  }

  validateFileZip(file): boolean {
    const mimeType = file.type;
    if (mimeType.match(/application\/zip/) || mimeType.match(/application\/x-zip-compressed/)) {
      return true;
    } else {
      return false;
    }
  }

  momentToDate(date): string {
    if (typeof date === 'object') {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    } else {
      return date;
    }
  }

  checkDateIsBefore(date): boolean {
    return moment(date).isBefore(moment());
  }

  formatDecimalValues(value, decimalPlaces): number {
    if (value && decimalPlaces) {
      const wholePlaces = value.length - decimalPlaces;
      value = value.slice(0, wholePlaces) + '.' + value.slice(wholePlaces);

      return parseFloat(value);
    }
    return null;
  }

  // tslint:disable-next-line: member-ordering
  toFormData = (function () {
    const Type = {
      isArray: function (obj) {
        return Object.prototype.toString.call(obj) == '[object ' + 'Array' + ']';
      },
      isObject: function (obj) {
        return Object.prototype.toString.call(obj) == '[object ' + 'Object' + ']';
      },
    };

    return function format(params) {
      const formData = new FormData();
      var store = {};
      for (var key in params) {
        if (Type.isObject(params[key]) || Type.isArray(params[key])) {
          for (var innerKey in params[key]) {
            if (params[key].hasOwnProperty(innerKey)) {
              store[key + '[' + innerKey + ']'] = params[key][innerKey];
            }
          }
        } else {
          store[key] = params[key];
        }
      }

      function check() {
        for (var key in store) {
          if (store.hasOwnProperty(key)) {
            if (Type.isObject(store[key]) || Type.isArray(store[key])) {
              return format(store);
            }
          }
        }
        for (const key of Object.keys(store)) {
          const value = store[key];
          formData.append(key, value);
        }
        return formData;
      }

      return check();
    };
  })();

  // FORM DATA ANTIGO
  //toFormData(formValue) {
  //   const formData = new FormData();

  //   for (const key of Object.keys(formValue)) {
  //     const value = formValue[key];

  //     if (value !== null && value !== undefined) {
  //       if (Array.isArray(value)) {
  //         for (var i = 0; i < value.length; i++) {
  //           formData.append(`${key}[]`, value[i]);
  //         }
  //       } else {
  //         formData.append(key, value);
  //       }
  //     }
  //   }
  //   return formData;
  // }

  formatData(routes): FuseNavigation[] {
    this.routes = arrayToTree(routes, {
      customID: 'id',
      parentProperty: 'parentId',
    });

    this.routes = this.routes.map((element: any) => {
      // console.log('elemento', element);
      element.id = element.id.toString();
      if (element.children) {
        delete element.url;
        this.children(element);
      }
      return element;
    });

    return this.routes;
  }

  children(element): void {
    element.children.map(item => {
      if (item.children) {
        delete item.url;
        this.children(item);
      }
      return item;
    });
  }
}
