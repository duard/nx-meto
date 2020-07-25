(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _meto_api_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @meto/api-database */ "./libs/api-database/src/index.ts");
var _a, _b, _c, _d;





let AppController = class AppController {
    constructor(appService, apiDB) {
        this.appService = appService;
        this.apiDB = apiDB;
    }
    getData() {
        return this.appService.getData();
    }
    async rawSql(query) {
        return this.apiDB.rawSQL(`SELECT * FROM G033 P, G032 M WHERE P.IDG032=M.IDG032 AND P.IDG031='1' AND M.DELETED='N' AND M.STS='A'   ORDER BY M.ORDEM  ASC`);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('hello'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"] !== "undefined" && _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"]) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('menu'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AppController.prototype, "rawSql", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]) === "function" ? _c : Object, typeof (_d = typeof _meto_api_database__WEBPACK_IMPORTED_MODULE_4__["ApiDatabaseService"] !== "undefined" && _meto_api_database__WEBPACK_IMPORTED_MODULE_4__["ApiDatabaseService"]) === "function" ? _d : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meto_api_cruds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @meto/api-cruds */ "./libs/api-cruds/src/index.ts");
/* harmony import */ var _meto_api_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @meto/api-database */ "./libs/api-database/src/index.ts");
/* harmony import */ var _nest_middlewares_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nest-middlewares/helmet */ "@nest-middlewares/helmet");
/* harmony import */ var _nest_middlewares_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nest_middlewares_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./apps/api/src/app/config.ts");
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./database.config */ "./apps/api/src/app/database.config.ts");
/* harmony import */ var _modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/menu/menu.module */ "./apps/api/src/app/modules/menu/menu.module.ts");
/* harmony import */ var _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/profile/profile.module */ "./apps/api/src/app/modules/profile/profile.module.ts");













let AppModule = class AppModule {
    constructor() {
        console.log('\n\n', '=> ', "development");
        console.log('\n\n', 'PORT =>', process.env.PORT);
        console.log('=> ', __dirname);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug('ENVIRONMENT =>', "development");
        _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug('PORT =>', process.env.PORT);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug('API_METO_PORT =>', process.env.API_METO_PORT);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug('HOSTNAME =>', process.env.DB_METO_HOSTNAME);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug('USERNAME =>', process.env.DB_METO_USERNAME);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug('PASSWORD =>', process.env.DB_METO_PASSWORD);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug(': DATABASE', process.env.DB_METO_DATABASE);
    }
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Module"])({
        imports: [
            _nestjs_config__WEBPACK_IMPORTED_MODULE_5__["ConfigModule"].forRoot({
                isGlobal: true,
                load: [_config__WEBPACK_IMPORTED_MODULE_9__["config"]],
            }),
            _nest_middlewares_helmet__WEBPACK_IMPORTED_MODULE_3__["HelmetMiddleware"],
            _meto_api_database__WEBPACK_IMPORTED_MODULE_2__["ApiDatabaseModule"],
            _modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_11__["MenuModule"],
            _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_12__["ProfileModule"],
            _meto_api_cruds__WEBPACK_IMPORTED_MODULE_1__["CargosModule"],
            _meto_api_cruds__WEBPACK_IMPORTED_MODULE_1__["LocaisModule"],
            _meto_api_cruds__WEBPACK_IMPORTED_MODULE_1__["EscolaridadesModule"],
            // GraphQLModule.forRoot({
            //   typePaths: ['./**/*.graphql'],
            //   definitions: { path: join(process.cwd(), 'src/graphql.ts') },
            //   context: ({ req }) => ({ headers: req.headers }),
            // }),
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_6__["TypeOrmModule"].forRootAsync({
                imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_5__["ConfigModule"]],
                useClass: _database_config__WEBPACK_IMPORTED_MODULE_10__["DatabaseConfig"],
            }),
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_7__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], _meto_api_database__WEBPACK_IMPORTED_MODULE_2__["ApiDatabaseService"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!', hora: new Date() };
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api/src/app/config.ts":
/*!************************************!*\
  !*** ./apps/api/src/app/config.ts ***!
  \************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = () => ({
    port: Number(process.env.PORT),
    jwtSecret: process.env.JWT_SECRET,
    database: {
        type: 'mysql',
        host: process.env.DB_METO_HOSTNAME,
        port: 3306,
        username: process.env.DB_METO_USERNAME,
        password: process.env.DB_METO_PASSWORD,
        database: process.env.DB_METO_DATABASE,
        synchronize: false,
        logging: true,
        autoLoadEntities: true
    },
});


/***/ }),

/***/ "./apps/api/src/app/database.config.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/app/database.config.ts ***!
  \*********************************************/
/*! exports provided: DatabaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseConfig", function() { return DatabaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
var _a;



let DatabaseConfig = class DatabaseConfig {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        const dbConfig = this.configService.get('database');
        console.log('DB CONFIG', dbConfig);
        return this.configService.get('database');
    }
};
DatabaseConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]) === "function" ? _a : Object])
], DatabaseConfig);



/***/ }),

/***/ "./apps/api/src/app/modules/menu/menu.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/modules/menu/menu.controller.ts ***!
  \**********************************************************/
/*! exports provided: MenuController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuController", function() { return MenuController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud */ "@nestjsx/crud");
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.entity */ "./apps/api/src/app/modules/menu/menu.entity.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.service */ "./apps/api/src/app/modules/menu/menu.service.ts");
/* harmony import */ var _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @meto/shared-things */ "./libs/shared-things/src/index.ts");
var _a, _b, _c;



// import { QueryDto } from '../../../shared/dto/query.dto';



let MenuController = class MenuController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
    }
    getMany(req, query) {
        if (query.orderType) {
            const order = query.orderType.toUpperCase();
            req.options.query.sort = [{ order, field: query.orderBy }];
        }
        return this.base.getManyBase(req);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Override"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["ParsedRequest"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["CrudRequest"] !== "undefined" && _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["CrudRequest"]) === "function" ? _a : Object, typeof (_b = typeof _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["QueryDto"] !== "undefined" && _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["QueryDto"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MenuController.prototype, "getMany", null);
MenuController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"])({
        model: {
            type: _menu_entity__WEBPACK_IMPORTED_MODULE_3__["Menu"],
        },
        query: {
            alwaysPaginate: true,
            // limit: 10,
            sort: [{ field: 'id', order: 'DESC' }],
            join: {
                menus: {
                    allow: [],
                },
                menu: {
                    allow: [],
                },
                profiles: {
                    allow: [],
                },
            },
        },
    }),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('menus'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] !== "undefined" && _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]) === "function" ? _c : Object])
], MenuController);



/***/ }),

/***/ "./apps/api/src/app/modules/menu/menu.entity.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/app/modules/menu/menu.entity.ts ***!
  \******************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud */ "@nestjsx/crud");
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @meto/shared-things */ "./libs/shared-things/src/index.ts");
/* harmony import */ var _profile_profile_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile/profile.entity */ "./apps/api/src/app/modules/profile/profile.entity.ts");
var Menu_1, _a, _b;







const { CREATE, UPDATE } = _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["CrudValidationGroups"];
let Menu = Menu_1 = class Menu {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ always: true }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["PrimaryGeneratedColumn"])({ name: 'id_menu' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Menu.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [UPDATE] }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["OneToMany"])(type => Menu_1, menu => menu.menu, { cascade: true, nullable: true, eager: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], Menu.prototype, "menus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [UPDATE] }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["ManyToOne"])(type => Menu_1, menu => menu.menus),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["JoinColumn"])({ name: 'id_menupai' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Menu)
], Menu.prototype, "menu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'id_menupai', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Menu.prototype, "parentId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsInt"])({ message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].IS_INT }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [UPDATE] }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsDefined"])({ groups: [CREATE], message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_EMPTY }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'nr_ordem', nullable: false, type: 'smallint' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Menu.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [UPDATE] }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsDefined"])({ groups: [CREATE], message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_EMPTY }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsString"])({ message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].IS_STRING }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'nm_menu', type: 'varchar', nullable: false, length: 50 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Menu.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [UPDATE] }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsDefined"])({ groups: [CREATE], message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].NOT_EMPTY }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsString"])({ message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].IS_STRING }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'ur_menu', type: 'varchar', nullable: false, length: 250 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Menu.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [UPDATE] }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsString"])({ message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["MESSAGES"].IS_STRING }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'nm_icone', type: 'varchar', length: 30, nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Menu.prototype, "icon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [CREATE, UPDATE] }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["ManyToMany"])(() => _profile_profile_entity__WEBPACK_IMPORTED_MODULE_6__["Profile"]),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["JoinTable"])({
        name: 'perfil_menu',
        joinColumn: { name: 'id_menu', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_perfil', referencedColumnName: 'id' },
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], Menu.prototype, "profiles", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'sn_ativo', type: 'smallint', default: 1 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Menu.prototype, "status", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'dt_cadast', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Menu.prototype, "createdAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'dt_altera', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Menu.prototype, "updatedAt", void 0);
Menu = Menu_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Entity"])('menus')
], Menu);



/***/ }),

/***/ "./apps/api/src/app/modules/menu/menu.module.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/app/modules/menu/menu.module.ts ***!
  \******************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.controller */ "./apps/api/src/app/modules/menu/menu.controller.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.service */ "./apps/api/src/app/modules/menu/menu.service.ts");
/* harmony import */ var _menu_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.entity */ "./apps/api/src/app/modules/menu/menu.entity.ts");






let MenuModule = class MenuModule {
};
MenuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([
                _menu_entity__WEBPACK_IMPORTED_MODULE_5__["Menu"],
            ]),
        ],
        controllers: [_menu_controller__WEBPACK_IMPORTED_MODULE_3__["MenuController"]],
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
    })
], MenuModule);



/***/ }),

/***/ "./apps/api/src/app/modules/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/modules/menu/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjsx/crud-typeorm */ "@nestjsx/crud-typeorm");
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.entity */ "./apps/api/src/app/modules/menu/menu.entity.ts");
var _a;






let MenuService = class MenuService extends _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmCrudService"] {
    constructor(menuRepository) {
        super(menuRepository);
        this.menuRepository = menuRepository;
    }
};
MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_menu_entity__WEBPACK_IMPORTED_MODULE_5__["Menu"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], MenuService);



/***/ }),

/***/ "./apps/api/src/app/modules/profile/profile.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/app/modules/profile/profile.controller.ts ***!
  \****************************************************************/
/*! exports provided: ProfileController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileController", function() { return ProfileController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud */ "@nestjsx/crud");
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.entity */ "./apps/api/src/app/modules/profile/profile.entity.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.service */ "./apps/api/src/app/modules/profile/profile.service.ts");
/* harmony import */ var _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @meto/shared-things */ "./libs/shared-things/src/index.ts");
var _a, _b, _c, _d;






let ProfileController = class ProfileController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
    }
    getMany(req, query) {
        const { search, searchBy, orderBy, orderType } = query;
        if (orderType) {
            const order = orderType.toUpperCase();
            req.options.query.sort = [{ order, field: orderBy }];
        }
        if (search) {
            const column = searchBy ? searchBy : 'name';
            req.parsed.search.$and = Object(_meto_shared_things__WEBPACK_IMPORTED_MODULE_5__["parseSearch"])(search, column);
        }
        return this.base.getManyBase(req);
    }
    createOneBase(req, body) {
        console.log('body', body);
        return this.base.createOneBase(req, body);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Override"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["ParsedRequest"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["CrudRequest"] !== "undefined" && _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["CrudRequest"]) === "function" ? _a : Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ProfileController.prototype, "getMany", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Override"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["ParsedRequest"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["ParsedBody"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["CrudRequest"] !== "undefined" && _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["CrudRequest"]) === "function" ? _b : Object, typeof (_c = typeof _profile_entity__WEBPACK_IMPORTED_MODULE_3__["Profile"] !== "undefined" && _profile_entity__WEBPACK_IMPORTED_MODULE_3__["Profile"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ProfileController.prototype, "createOneBase", null);
ProfileController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"])({
        model: {
            type: _profile_entity__WEBPACK_IMPORTED_MODULE_3__["Profile"],
        },
        query: {
            alwaysPaginate: true,
            limit: 10,
            sort: [{ field: 'id', order: 'DESC' }],
            join: {
                menus: {
                    allow: [],
                },
            },
        },
    }),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('profiles'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] !== "undefined" && _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]) === "function" ? _d : Object])
], ProfileController);



/***/ }),

/***/ "./apps/api/src/app/modules/profile/profile.entity.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/modules/profile/profile.entity.ts ***!
  \************************************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud */ "@nestjsx/crud");
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_menu_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.entity */ "./apps/api/src/app/modules/menu/menu.entity.ts");
/* harmony import */ var _meto_shared_things__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @meto/shared-things */ "./libs/shared-things/src/index.ts");
var _a, _b;







const { CREATE, UPDATE } = _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["CrudValidationGroups"];
let Profile = class Profile {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ always: true }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["PrimaryGeneratedColumn"])({ name: 'id_profile' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Profile.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [UPDATE] }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsDefined"])({ groups: [CREATE], message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_6__["MESSAGES"].NOT_EMPTY }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsString"])({ message: _meto_shared_things__WEBPACK_IMPORTED_MODULE_6__["MESSAGES"].IS_STRING }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'nm_perfil', length: 30, type: 'varchar', nullable: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Profile.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsOptional"])({ groups: [CREATE, UPDATE] }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["ManyToMany"])(type => _menu_menu_entity__WEBPACK_IMPORTED_MODULE_5__["Menu"], menu => menu.profiles, { cascade: true }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["JoinTable"])({
        name: 'perfil_menu',
        inverseJoinColumn: { name: 'id_menu', referencedColumnName: 'id' },
        joinColumn: { name: 'id_perfil', referencedColumnName: 'id' },
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], Profile.prototype, "menus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'dt_cadast', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Profile.prototype, "createdAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({ name: 'dt_altera', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Profile.prototype, "updatedAt", void 0);
Profile = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Entity"])('perfis')
], Profile);

// @ManyToOne({ entity: () => Author })


/***/ }),

/***/ "./apps/api/src/app/modules/profile/profile.module.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/modules/profile/profile.module.ts ***!
  \************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.controller */ "./apps/api/src/app/modules/profile/profile.controller.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.service */ "./apps/api/src/app/modules/profile/profile.service.ts");
/* harmony import */ var _profile_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.entity */ "./apps/api/src/app/modules/profile/profile.entity.ts");






let ProfileModule = class ProfileModule {
};
ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([
                _profile_entity__WEBPACK_IMPORTED_MODULE_5__["Profile"],
            ]),
        ],
        controllers: [_profile_controller__WEBPACK_IMPORTED_MODULE_3__["ProfileController"]],
        providers: [_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]],
    })
], ProfileModule);



/***/ }),

/***/ "./apps/api/src/app/modules/profile/profile.service.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/modules/profile/profile.service.ts ***!
  \*************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjsx/crud-typeorm */ "@nestjsx/crud-typeorm");
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profile_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.entity */ "./apps/api/src/app/modules/profile/profile.entity.ts");
var _a;






let ProfileService = class ProfileService extends _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmCrudService"] {
    constructor(profileRepository) {
        super(profileRepository);
        this.profileRepository = profileRepository;
    }
};
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_profile_entity__WEBPACK_IMPORTED_MODULE_5__["Profile"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], ProfileService);



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meto_shared_things__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @meto/shared-things */ "./libs/shared-things/src/index.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");






async function bootstrap() {
    // const app = await NestFactory.create(AppModule, {
    //   logger: new BunyanLoggerService({
    //     projectName: 'SIMPLES',
    //     formatterOptions: {
    //       outputMode: 'short',
    //       color: true,
    //       levelInString: true,
    //       // colorFromLevel: any
    //     },
    //     customStreams: [
    //       {
    //         path: './api-log.log',
    //       },
    //     ],
    //   }),
    // });
    const app = await _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"]);
    app.useGlobalPipes(new _meto_shared_things__WEBPACK_IMPORTED_MODULE_4__["ValidationPipe"]());
    // const app = await NestFactory.create(AppModule, { logger: true });
    // app.useLogger(app.get(Logger));
    app.enableCors();
    const configService = app.get(_nestjs_config__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const options = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["DocumentBuilder"]()
        .setTitle('Simples API Carlos')
        .setDescription('API NestJS para Base')
        .setVersion('1.0')
        // .setBasePath('api')
        .addBearerAuth()
        .build();
    const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].createDocument(app, options);
    _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].setup('/docs', app, document);
    const PORT = process.env.PORT || 3333;
    await app.listen(PORT, () => {
        _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('AMBIENTE =>', "development");
        _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('PORT =>', process.env.PORT);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('API_METO_PORT =>', process.env.API_METO_PORT);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('HOSTNAME =>', process.env.DB_METO_HOSTNAME);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('USERNAME =>', process.env.DB_METO_USERNAME);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('PASSWORD =>', process.env.DB_METO_PASSWORD);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug(': DATABASE', process.env.DB_METO_DATABASE);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('Listening at http://localhost:' + process.env.PORT || false);
        console.log(`Listening on ${PORT}`);
    });
}
bootstrap();


/***/ }),

/***/ "./libs/api-cruds/src/index.ts":
/*!*************************************!*\
  !*** ./libs/api-cruds/src/index.ts ***!
  \*************************************/
/*! exports provided: CargosModule, EscolaridadesModule, LocaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_cargos_cargos_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/cargos/cargos.module */ "./libs/api-cruds/src/lib/cargos/cargos.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargosModule", function() { return _lib_cargos_cargos_module__WEBPACK_IMPORTED_MODULE_0__["CargosModule"]; });

/* harmony import */ var _lib_escolaridades_escolaridades_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/escolaridades/escolaridades.module */ "./libs/api-cruds/src/lib/escolaridades/escolaridades.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EscolaridadesModule", function() { return _lib_escolaridades_escolaridades_module__WEBPACK_IMPORTED_MODULE_1__["EscolaridadesModule"]; });

/* harmony import */ var _lib_locais_locais_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/locais/locais.module */ "./libs/api-cruds/src/lib/locais/locais.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocaisModule", function() { return _lib_locais_locais_module__WEBPACK_IMPORTED_MODULE_2__["LocaisModule"]; });






/***/ }),

/***/ "./libs/api-cruds/src/lib/cargos/cargos.controller.ts":
/*!************************************************************!*\
  !*** ./libs/api-cruds/src/lib/cargos/cargos.controller.ts ***!
  \************************************************************/
/*! exports provided: CargosController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargosController", function() { return CargosController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud */ "@nestjsx/crud");
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _cargos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cargos.service */ "./libs/api-cruds/src/lib/cargos/cargos.service.ts");
var _a;





let CargosController = class CargosController {
    constructor(service) {
        this.service = service;
    }
};
CargosController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"])({
        model: {
            type: _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CargoEntity"],
        },
        query: {
            limit: 5,
            cache: 2000,
        },
        params: {
            id: {
                field: 'IDE001',
                type: 'number',
                primary: true,
            },
        },
    }),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('cargos'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _cargos_service__WEBPACK_IMPORTED_MODULE_4__["CargosService"] !== "undefined" && _cargos_service__WEBPACK_IMPORTED_MODULE_4__["CargosService"]) === "function" ? _a : Object])
], CargosController);



/***/ }),

/***/ "./libs/api-cruds/src/lib/cargos/cargos.module.ts":
/*!********************************************************!*\
  !*** ./libs/api-cruds/src/lib/cargos/cargos.module.ts ***!
  \********************************************************/
/*! exports provided: CargosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargosModule", function() { return CargosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _cargos_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cargos.controller */ "./libs/api-cruds/src/lib/cargos/cargos.controller.ts");
/* harmony import */ var _cargos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cargos.service */ "./libs/api-cruds/src/lib/cargos/cargos.service.ts");






let CargosModule = class CargosModule {
};
CargosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CargoEntity"]])],
        controllers: [_cargos_controller__WEBPACK_IMPORTED_MODULE_4__["CargosController"]],
        providers: [_cargos_service__WEBPACK_IMPORTED_MODULE_5__["CargosService"]],
    })
], CargosModule);



/***/ }),

/***/ "./libs/api-cruds/src/lib/cargos/cargos.service.ts":
/*!*********************************************************!*\
  !*** ./libs/api-cruds/src/lib/cargos/cargos.service.ts ***!
  \*********************************************************/
/*! exports provided: CargosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargosService", function() { return CargosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud-typeorm */ "@nestjsx/crud-typeorm");
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
var _a;






let CargosService = class CargosService extends _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmCrudService"] {
    constructor(thisRepository) {
        super(thisRepository);
    }
};
CargosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["InjectRepository"])(_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__["CargoEntity"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], CargosService);



/***/ }),

/***/ "./libs/api-cruds/src/lib/escolaridades/escolaridades.controller.ts":
/*!**************************************************************************!*\
  !*** ./libs/api-cruds/src/lib/escolaridades/escolaridades.controller.ts ***!
  \**************************************************************************/
/*! exports provided: EscolaridadesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolaridadesController", function() { return EscolaridadesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud */ "@nestjsx/crud");
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _escolaridades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./escolaridades.service */ "./libs/api-cruds/src/lib/escolaridades/escolaridades.service.ts");
var _a;





let EscolaridadesController = class EscolaridadesController {
    constructor(service) {
        this.service = service;
    }
};
EscolaridadesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"])({
        model: {
            type: _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CargoEntity"],
        },
        query: {
            limit: 5,
            cache: 2000,
        },
        params: {
            id: {
                field: 'IDE002',
                type: 'number',
                primary: true,
            },
        },
    }),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('escolaridades'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _escolaridades_service__WEBPACK_IMPORTED_MODULE_4__["EscolaridadesService"] !== "undefined" && _escolaridades_service__WEBPACK_IMPORTED_MODULE_4__["EscolaridadesService"]) === "function" ? _a : Object])
], EscolaridadesController);



/***/ }),

/***/ "./libs/api-cruds/src/lib/escolaridades/escolaridades.module.ts":
/*!**********************************************************************!*\
  !*** ./libs/api-cruds/src/lib/escolaridades/escolaridades.module.ts ***!
  \**********************************************************************/
/*! exports provided: EscolaridadesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolaridadesModule", function() { return EscolaridadesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _escolaridades_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./escolaridades.controller */ "./libs/api-cruds/src/lib/escolaridades/escolaridades.controller.ts");
/* harmony import */ var _escolaridades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./escolaridades.service */ "./libs/api-cruds/src/lib/escolaridades/escolaridades.service.ts");






let EscolaridadesModule = class EscolaridadesModule {
};
EscolaridadesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["EscolaridadeEntity"]])],
        controllers: [_escolaridades_controller__WEBPACK_IMPORTED_MODULE_4__["EscolaridadesController"]],
        providers: [_escolaridades_service__WEBPACK_IMPORTED_MODULE_5__["EscolaridadesService"]],
    })
], EscolaridadesModule);



/***/ }),

/***/ "./libs/api-cruds/src/lib/escolaridades/escolaridades.service.ts":
/*!***********************************************************************!*\
  !*** ./libs/api-cruds/src/lib/escolaridades/escolaridades.service.ts ***!
  \***********************************************************************/
/*! exports provided: EscolaridadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolaridadesService", function() { return EscolaridadesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud-typeorm */ "@nestjsx/crud-typeorm");
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
var _a;






let EscolaridadesService = class EscolaridadesService extends _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmCrudService"] {
    constructor(thisRepository) {
        super(thisRepository);
    }
};
EscolaridadesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["InjectRepository"])(_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__["EscolaridadeEntity"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], EscolaridadesService);



/***/ }),

/***/ "./libs/api-cruds/src/lib/locais/locais.controller.ts":
/*!************************************************************!*\
  !*** ./libs/api-cruds/src/lib/locais/locais.controller.ts ***!
  \************************************************************/
/*! exports provided: LocaisController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaisController", function() { return LocaisController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud */ "@nestjsx/crud");
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _locais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locais.service */ "./libs/api-cruds/src/lib/locais/locais.service.ts");
var _a;





let LocaisController = class LocaisController {
    constructor(service) {
        this.service = service;
    }
};
LocaisController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"])({
        model: {
            type: _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["LocalEntity"],
        },
        query: {
            limit: 5,
            cache: 2000,
        },
        params: {
            id: {
                field: 'IDG004',
                type: 'number',
                primary: true,
            },
        },
    }),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('locais'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _locais_service__WEBPACK_IMPORTED_MODULE_4__["LocaisService"] !== "undefined" && _locais_service__WEBPACK_IMPORTED_MODULE_4__["LocaisService"]) === "function" ? _a : Object])
], LocaisController);



/***/ }),

/***/ "./libs/api-cruds/src/lib/locais/locais.module.ts":
/*!********************************************************!*\
  !*** ./libs/api-cruds/src/lib/locais/locais.module.ts ***!
  \********************************************************/
/*! exports provided: LocaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaisModule", function() { return LocaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locais_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locais.controller */ "./libs/api-cruds/src/lib/locais/locais.controller.ts");
/* harmony import */ var _locais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locais.service */ "./libs/api-cruds/src/lib/locais/locais.service.ts");






let LocaisModule = class LocaisModule {
};
LocaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"].forFeature([_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["LocalEntity"]])],
        controllers: [_locais_controller__WEBPACK_IMPORTED_MODULE_4__["LocaisController"]],
        providers: [_locais_service__WEBPACK_IMPORTED_MODULE_5__["LocaisService"]],
    })
], LocaisModule);



/***/ }),

/***/ "./libs/api-cruds/src/lib/locais/locais.service.ts":
/*!*********************************************************!*\
  !*** ./libs/api-cruds/src/lib/locais/locais.service.ts ***!
  \*********************************************************/
/*! exports provided: LocaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaisService", function() { return LocaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjsx/crud-typeorm */ "@nestjsx/crud-typeorm");
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @meto/api-interfaces */ "./libs/api-interfaces/src/index.ts");
var _a;






let LocaisService = class LocaisService extends _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmCrudService"] {
    constructor(thisRepository) {
        super(thisRepository);
    }
};
LocaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["InjectRepository"])(_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__["LocalEntity"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
], LocaisService);



/***/ }),

/***/ "./libs/api-database/src/index.ts":
/*!****************************************!*\
  !*** ./libs/api-database/src/index.ts ***!
  \****************************************/
/*! exports provided: ApiDatabaseModule, ApiDatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_database_api_database_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api-database/api-database.module */ "./libs/api-database/src/lib/api-database/api-database.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiDatabaseModule", function() { return _lib_api_database_api_database_module__WEBPACK_IMPORTED_MODULE_0__["ApiDatabaseModule"]; });

/* harmony import */ var _lib_api_database_api_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/api-database/api-database.service */ "./libs/api-database/src/lib/api-database/api-database.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiDatabaseService", function() { return _lib_api_database_api_database_service__WEBPACK_IMPORTED_MODULE_1__["ApiDatabaseService"]; });





/***/ }),

/***/ "./libs/api-database/src/lib/api-database/api-database.controller.ts":
/*!***************************************************************************!*\
  !*** ./libs/api-database/src/lib/api-database/api-database.controller.ts ***!
  \***************************************************************************/
/*! exports provided: ApiDatabaseController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDatabaseController", function() { return ApiDatabaseController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-database.service */ "./libs/api-database/src/lib/api-database/api-database.service.ts");
var _a, _b, _c;



let ApiDatabaseController = class ApiDatabaseController {
    constructor(apiDatabaseService) {
        this.apiDatabaseService = apiDatabaseService;
    }
    async rawSql(query) {
        return this.apiDatabaseService.rawSQL(query.querySQL);
    }
    async tableFields(query) {
        return this.apiDatabaseService.tableFields(query.tableName);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('raw-sql'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ApiDatabaseController.prototype, "rawSql", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('table-fields'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ApiDatabaseController.prototype, "tableFields", null);
ApiDatabaseController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('api-database'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _api_database_service__WEBPACK_IMPORTED_MODULE_2__["ApiDatabaseService"] !== "undefined" && _api_database_service__WEBPACK_IMPORTED_MODULE_2__["ApiDatabaseService"]) === "function" ? _c : Object])
], ApiDatabaseController);

// http://localhost:3333/api/api-database/raw-sql?querySQL=select%20*%20from%20G026
// http://localhost:3333/api/api-database/table-fields?tableName=G034


/***/ }),

/***/ "./libs/api-database/src/lib/api-database/api-database.module.ts":
/*!***********************************************************************!*\
  !*** ./libs/api-database/src/lib/api-database/api-database.module.ts ***!
  \***********************************************************************/
/*! exports provided: ApiDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDatabaseModule", function() { return ApiDatabaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_database_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-database.controller */ "./libs/api-database/src/lib/api-database/api-database.controller.ts");
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-database.service */ "./libs/api-database/src/lib/api-database/api-database.service.ts");




let ApiDatabaseModule = class ApiDatabaseModule {
};
ApiDatabaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [_api_database_controller__WEBPACK_IMPORTED_MODULE_2__["ApiDatabaseController"]],
        providers: [_api_database_service__WEBPACK_IMPORTED_MODULE_3__["ApiDatabaseService"]],
        exports: [],
    })
], ApiDatabaseModule);



/***/ }),

/***/ "./libs/api-database/src/lib/api-database/api-database.service.ts":
/*!************************************************************************!*\
  !*** ./libs/api-database/src/lib/api-database/api-database.service.ts ***!
  \************************************************************************/
/*! exports provided: ApiDatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDatabaseService", function() { return ApiDatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_2__);
var _a;



let ApiDatabaseService = class ApiDatabaseService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async rawSQL(sqlQuery) {
        const rawData = await this.entityManager.query(sqlQuery);
        return rawData;
    }
    tableFields(tableName) {
        const rawData = this.entityManager.query(`SHOW COLUMNS FROM ${tableName}`);
        return rawData;
    }
};
ApiDatabaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_2__["EntityManager"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_2__["EntityManager"]) === "function" ? _a : Object])
], ApiDatabaseService);

// const rawData = await manager.query(`SELECT * FROM USERS`);
// `SHOW COLUMNS FROM City`


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-interfaces/src/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/interfaces/api-interfaces */ "./libs/api-interfaces/src/lib/interfaces/api-interfaces.ts");
/* harmony import */ var _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_entities_cargos_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/entities/cargos.entity */ "./libs/api-interfaces/src/lib/entities/cargos.entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargoEntity", function() { return _lib_entities_cargos_entity__WEBPACK_IMPORTED_MODULE_1__["CargoEntity"]; });

/* harmony import */ var _lib_entities_locais_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/entities/locais.entity */ "./libs/api-interfaces/src/lib/entities/locais.entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalEntity", function() { return _lib_entities_locais_entity__WEBPACK_IMPORTED_MODULE_2__["LocalEntity"]; });

/* harmony import */ var _lib_entities_escolaridades_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/entities/escolaridades.entity */ "./libs/api-interfaces/src/lib/entities/escolaridades.entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EscolaridadeEntity", function() { return _lib_entities_escolaridades_entity__WEBPACK_IMPORTED_MODULE_3__["EscolaridadeEntity"]; });

/* harmony import */ var _lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/interfaces/cargos.interface */ "./libs/api-interfaces/src/lib/interfaces/cargos.interface.ts");
/* harmony import */ var _lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4__) if(["CargoEntity","LocalEntity","EscolaridadeEntity","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/interfaces/escolaridades.interface */ "./libs/api-interfaces/src/lib/interfaces/escolaridades.interface.ts");
/* harmony import */ var _lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5__) if(["CargoEntity","LocalEntity","EscolaridadeEntity","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));




// export * from './lib/cargos/cargos.entity';

// export * from './lib/escolaridades/escolaridades.entity';

// export * from './lib/entities/A001';
// export * from './lib/entities/Configuracoes';
// export * from './lib/entities/CotasPercentuais';
// export * from './lib/entities/E001';
// export * from './lib/entities/E002';
// export * from './lib/entities/E003';
// export * from './lib/entities/E004';


/***/ }),

/***/ "./libs/api-interfaces/src/lib/entities/cargos.entity.ts":
/*!***************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/entities/cargos.entity.ts ***!
  \***************************************************************/
/*! exports provided: CargoEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoEntity", function() { return CargoEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
var _a, _b;


let CargoEntity = class CargoEntity {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CargoEntity.prototype, "IDE001", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ unique: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CargoEntity.prototype, "NOME", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CargoEntity.prototype, "CREATED", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CargoEntity.prototype, "UPDATED", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ default: 'N', length: 1 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CargoEntity.prototype, "DELETED", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ default: 'A', length: 1 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CargoEntity.prototype, "STS", void 0);
CargoEntity = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('E001')
], CargoEntity);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/entities/escolaridades.entity.ts":
/*!**********************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/entities/escolaridades.entity.ts ***!
  \**********************************************************************/
/*! exports provided: EscolaridadeEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolaridadeEntity", function() { return EscolaridadeEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
var _a, _b;


// @Entity('E002')
let EscolaridadeEntity = class EscolaridadeEntity {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], EscolaridadeEntity.prototype, "IDE002", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ unique: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], EscolaridadeEntity.prototype, "NOME", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EscolaridadeEntity.prototype, "CREATED", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], EscolaridadeEntity.prototype, "UPDATED", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ default: 'N', length: 1 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], EscolaridadeEntity.prototype, "DELETED", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ default: 'A', length: 1 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], EscolaridadeEntity.prototype, "STS", void 0);
EscolaridadeEntity = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])({ name: 'E002' })
], EscolaridadeEntity);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/entities/locais.entity.ts":
/*!***************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/entities/locais.entity.ts ***!
  \***************************************************************/
/*! exports provided: LocalEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalEntity", function() { return LocalEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
var _a, _b, _c;


let LocalEntity = class LocalEntity {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])({ type: 'int', name: 'IDG004' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "idg004", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'IDG003', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "idg003", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'NOME', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "nome", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'CNPJ', nullable: true, unique: true, length: 18 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "cnpj", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('date', { name: 'FUNDACAO', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "fundacao", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'IDE005', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "ide005", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'OBSERVAC', nullable: true, length: 500 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "observac", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'EMAILINS', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "emailins", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'SITE', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "site", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'FACEBOOK', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "facebook", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'TWITTER', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "twitter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'YOUTUBE', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "youtube", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'INSTAG', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "instag", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'TEL1', nullable: true, length: 45 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "tel1", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'TEL2', nullable: true, length: 45 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "tel2", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'TEL3', nullable: true, length: 45 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "tel3", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'TEL4', nullable: true, length: 45 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "tel4", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('datetime', { name: 'CREATED', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], LocalEntity.prototype, "created", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('datetime', { name: 'UPDATED', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], LocalEntity.prototype, "updated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', {
        name: 'DELETED',
        nullable: true,
        length: 1,
        default: () => "'N'",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "deleted", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', {
        name: 'STS',
        nullable: true,
        length: 1,
        default: () => "'A'",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "sts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('timestamp', {
        name: 'DESCONTO_DT',
        default: () => "'1970-01-01 03:00:01'",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], LocalEntity.prototype, "descontoDt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('decimal', {
        name: 'DESCONTO_PERCENTUAL',
        nullable: true,
        precision: 10,
        scale: 2,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "descontoPercentual", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'CEP', nullable: true, length: 9 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "cep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'LOGRADOU', nullable: true, length: 45 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "logradou", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'NUMERO', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "numero", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'COMPLEM', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "complem", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'BAIRRO', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "bairro", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'CIDADE', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "cidade", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'ESTADO', nullable: true, length: 2 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "estado", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'HISTORIA', nullable: true, length: 60000 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "historia", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'IDG002', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "idg002", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'EMAILPAS', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "emailpas", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'EMAILSEC', nullable: true, length: 60 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "emailsec", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'IDG004FK', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "idg004Fk", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'SEDE', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "sede", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'IDG019', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "idg019", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'IDG021', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "idg021", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 100 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LocalEntity.prototype, "razaosocial", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'RUBRICAPEC', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "rubricapec", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int', { name: 'RUBRICACOTAREG', nullable: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LocalEntity.prototype, "rubricacotareg", void 0);
LocalEntity = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_G002IDG002_IDG002_idx', ['idg002'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_G004_G019_idx', ['idg019'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_G004_G021_idx', ['idg021'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_G004IDG004FK_IDG004', ['idg004Fk'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_IDE005_IDE005_idx', ['ide005'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_IDG002_IDG002_idx', ['idg002'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_IDG003_IDG003_idx', ['idg003'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_RUBRICACOTAREG_IDG019_idx', ['rubricacotareg'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_RUBRICAPEC_IDG019_idx', ['rubricapec'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('FK_SEDE_IDG001_idx', ['sede'], {}),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])('G004_UN', ['cnpj'], { unique: true }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('G004', { schema: 'metodista_local' })
], LocalEntity);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/interfaces/api-interfaces.ts":
/*!******************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/interfaces/api-interfaces.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/api-interfaces/src/lib/interfaces/cargos.interface.ts":
/*!********************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/interfaces/cargos.interface.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/api-interfaces/src/lib/interfaces/escolaridades.interface.ts":
/*!***************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/interfaces/escolaridades.interface.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./libs/shared-things/src/index.ts":
/*!*****************************************!*\
  !*** ./libs/shared-things/src/index.ts ***!
  \*****************************************/
/*! exports provided: ConfigService, Password, SnakeNamingStrategy, periods, compareTime, compareDateIsAfter, compareDateIsSameOrAfeter, isBetween, getTimeInterval, convertHoursToNumber, dayWeekByDate, monthByDate, dayWeekByIndex, indexByDayWeek, getRange, getNumberRange, getCurrentDateWithoutHours, formatDateWithoutHours, formatDateHours, formatDateWithHours, generateCodeWithCurrentDate, generateCodePlp, getDateNowWithouHours, calculatesTheDifferenceBetweenDates, addDays, formatByType, Email, imageFileFilter, editFileName, onlyNumbers, prepareToken, verifyToken, decoteToken, generateRandonPassword, comparePasswordHash, parseSearch, SharedThingsModule, ValidationPipe, QueryDto, MESSAGES, ERROR_MESSAGES, MESSAGES_V2, SankhyaEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/services/config.service */ "./libs/shared-things/src/lib/services/config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _lib_services_config_service__WEBPACK_IMPORTED_MODULE_0__["ConfigService"]; });

/* harmony import */ var _lib_classes_password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/classes/password */ "./libs/shared-things/src/lib/classes/password.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Password", function() { return _lib_classes_password__WEBPACK_IMPORTED_MODULE_1__["Password"]; });

/* harmony import */ var _lib_utils_snake_naming_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/utils/snake-naming.strategy */ "./libs/shared-things/src/lib/utils/snake-naming.strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnakeNamingStrategy", function() { return _lib_utils_snake_naming_strategy__WEBPACK_IMPORTED_MODULE_2__["SnakeNamingStrategy"]; });

/* harmony import */ var _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/utils/date.utils */ "./libs/shared-things/src/lib/utils/date.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "periods", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["periods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareTime", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["compareTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareDateIsAfter", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["compareDateIsAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareDateIsSameOrAfeter", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["compareDateIsSameOrAfeter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["isBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimeInterval", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["getTimeInterval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertHoursToNumber", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["convertHoursToNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayWeekByDate", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["dayWeekByDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monthByDate", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["monthByDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayWeekByIndex", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["dayWeekByIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexByDayWeek", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["indexByDayWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRange", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["getRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberRange", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["getNumberRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateWithoutHours", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["getCurrentDateWithoutHours"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDateWithoutHours", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["formatDateWithoutHours"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDateHours", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["formatDateHours"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDateWithHours", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["formatDateWithHours"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCodeWithCurrentDate", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["generateCodeWithCurrentDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCodePlp", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["generateCodePlp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateNowWithouHours", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["getDateNowWithouHours"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatesTheDifferenceBetweenDates", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["calculatesTheDifferenceBetweenDates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["addDays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatByType", function() { return _lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_3__["formatByType"]; });

/* harmony import */ var _lib_utils_email_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils/email.utils */ "./libs/shared-things/src/lib/utils/email.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return _lib_utils_email_utils__WEBPACK_IMPORTED_MODULE_4__["Email"]; });

/* harmony import */ var _lib_utils_file_upload_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/utils/file-upload.utils */ "./libs/shared-things/src/lib/utils/file-upload.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageFileFilter", function() { return _lib_utils_file_upload_utils__WEBPACK_IMPORTED_MODULE_5__["imageFileFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editFileName", function() { return _lib_utils_file_upload_utils__WEBPACK_IMPORTED_MODULE_5__["editFileName"]; });

/* harmony import */ var _lib_utils_format_data_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils/format-data.utils */ "./libs/shared-things/src/lib/utils/format-data.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return _lib_utils_format_data_utils__WEBPACK_IMPORTED_MODULE_6__["onlyNumbers"]; });

/* harmony import */ var _lib_utils_jwt_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/utils/jwt.utils */ "./libs/shared-things/src/lib/utils/jwt.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepareToken", function() { return _lib_utils_jwt_utils__WEBPACK_IMPORTED_MODULE_7__["prepareToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return _lib_utils_jwt_utils__WEBPACK_IMPORTED_MODULE_7__["verifyToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decoteToken", function() { return _lib_utils_jwt_utils__WEBPACK_IMPORTED_MODULE_7__["decoteToken"]; });

/* harmony import */ var _lib_utils_password_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/utils/password.utils */ "./libs/shared-things/src/lib/utils/password.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateRandonPassword", function() { return _lib_utils_password_utils__WEBPACK_IMPORTED_MODULE_8__["generateRandonPassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "comparePasswordHash", function() { return _lib_utils_password_utils__WEBPACK_IMPORTED_MODULE_8__["comparePasswordHash"]; });

/* harmony import */ var _lib_utils_search_transform_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/utils/search-transform.utils */ "./libs/shared-things/src/lib/utils/search-transform.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSearch", function() { return _lib_utils_search_transform_utils__WEBPACK_IMPORTED_MODULE_9__["parseSearch"]; });

/* harmony import */ var _lib_shared_things_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/shared-things.module */ "./libs/shared-things/src/lib/shared-things.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedThingsModule", function() { return _lib_shared_things_module__WEBPACK_IMPORTED_MODULE_10__["SharedThingsModule"]; });

/* harmony import */ var _lib_pipes_validation_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/pipes/validation.pipe */ "./libs/shared-things/src/lib/pipes/validation.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationPipe", function() { return _lib_pipes_validation_pipe__WEBPACK_IMPORTED_MODULE_11__["ValidationPipe"]; });

/* harmony import */ var _lib_dto_query_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/dto/query.dto */ "./libs/shared-things/src/lib/dto/query.dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryDto", function() { return _lib_dto_query_dto__WEBPACK_IMPORTED_MODULE_12__["QueryDto"]; });

/* harmony import */ var _lib_enums_messages_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/enums/messages.enum */ "./libs/shared-things/src/lib/enums/messages.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return _lib_enums_messages_enum__WEBPACK_IMPORTED_MODULE_13__["MESSAGES"]; });

/* harmony import */ var _lib_enums_error_messages_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/enums/error.messages.enum */ "./libs/shared-things/src/lib/enums/error.messages.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES", function() { return _lib_enums_error_messages_enum__WEBPACK_IMPORTED_MODULE_14__["ERROR_MESSAGES"]; });

/* harmony import */ var _lib_enums_messagesv2_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/enums/messagesv2.enum */ "./libs/shared-things/src/lib/enums/messagesv2.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_V2", function() { return _lib_enums_messagesv2_enum__WEBPACK_IMPORTED_MODULE_15__["MESSAGES_V2"]; });

/* harmony import */ var _lib_enums_sankhya_endpoints_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/enums/sankhya-endpoints.enum */ "./libs/shared-things/src/lib/enums/sankhya-endpoints.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SankhyaEndpoint", function() { return _lib_enums_sankhya_endpoints_enum__WEBPACK_IMPORTED_MODULE_16__["SankhyaEndpoint"]; });




















/***/ }),

/***/ "./libs/shared-things/src/lib/classes/password.ts":
/*!********************************************************!*\
  !*** ./libs/shared-things/src/lib/classes/password.ts ***!
  \********************************************************/
/*! exports provided: Password */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Password", function() { return Password; });
class Password {
}


/***/ }),

/***/ "./libs/shared-things/src/lib/dto/query.dto.ts":
/*!*****************************************************!*\
  !*** ./libs/shared-things/src/lib/dto/query.dto.ts ***!
  \*****************************************************/
/*! exports provided: QueryDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDto", function() { return QueryDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);



class QueryDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], QueryDto.prototype, "limit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], QueryDto.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], QueryDto.prototype, "searchBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], QueryDto.prototype, "search", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], QueryDto.prototype, "orderBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], QueryDto.prototype, "orderType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], QueryDto.prototype, "status", void 0);


/***/ }),

/***/ "./libs/shared-things/src/lib/enums/error.messages.enum.ts":
/*!*****************************************************************!*\
  !*** ./libs/shared-things/src/lib/enums/error.messages.enum.ts ***!
  \*****************************************************************/
/*! exports provided: ERROR_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES", function() { return ERROR_MESSAGES; });
var ERROR_MESSAGES;
(function (ERROR_MESSAGES) {
    ERROR_MESSAGES["BAD_REQUEST"] = "Dados mal formatados.";
    ERROR_MESSAGES["INTERNAL_SERVER_ERROR"] = "Erro interno no servidor.";
    ERROR_MESSAGES["NOT_FOUND"] = "Dados n\u00E3o encontrados.";
    ERROR_MESSAGES["SERVICE_UNAVAILABLE"] = "Servi\u00E7o indispon\u00EDvel.";
    ERROR_MESSAGES["NOT_ACCEPTABLE"] = "N\u00E3o aceit\u00E1vel";
    ERROR_MESSAGES["TOKEN_FORBIDDEN"] = "Acesso negado! Token inv\u00E1lido ou n\u00E3o informado";
    ERROR_MESSAGES["ROLE_FORBIDDEN"] = "Acesso negado! Sem permiss\u00E3o";
    ERROR_MESSAGES["FIREBASE_TOKEN_NOT_FOUND"] = "Token n\u00E3o encontrado";
    ERROR_MESSAGES["ICX_INTERNAL_SERVER_ERROR"] = "Erro ao tentar conectar com o ICX";
    ERROR_MESSAGES["ICX_REF_NOT_FOUND"] = "Id de refer\u00EAncia do ICX n\u00E3o foi encontrado";
    ERROR_MESSAGES["ORDER_NOT_FOUND"] = "Pedido n\u00E3o encontrado.";
})(ERROR_MESSAGES || (ERROR_MESSAGES = {}));


/***/ }),

/***/ "./libs/shared-things/src/lib/enums/messages.enum.ts":
/*!***********************************************************!*\
  !*** ./libs/shared-things/src/lib/enums/messages.enum.ts ***!
  \***********************************************************/
/*! exports provided: MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return MESSAGES; });
var MESSAGES;
(function (MESSAGES) {
    MESSAGES["DELETED"] = "Registro deletado com sucesso";
    MESSAGES["NOT_FOUND"] = "Registro inexistente!";
    MESSAGES["ZIP_CODE_NOT_FOUND"] = "Cep n\u00E3o encontrado";
    MESSAGES["MAX_LENGTH"] = "Limite m\u00E1ximo de caracteres excedido";
    MESSAGES["NOT_EMPTY"] = "Campo obrigat\u00F3rio";
    MESSAGES["IS_INT"] = "O campo deve ser do tipo inteiro";
    MESSAGES["IS_STRING"] = "O campo deve ser do tipo string";
    MESSAGES["IS_ARRAY"] = "O campo deve ser do tipo array";
    MESSAGES["IS_ARRAY_OBJECT"] = "O campo deve ser do tipo array de objetos";
    MESSAGES["IS_OBJECT"] = "O campo deve ser do tipo objeto.";
    MESSAGES["IS_DATETIME"] = "O campo deve ser do tipo datetime YYYY-MM-DDTHH:mm:ssZ";
    MESSAGES["IS_DATE"] = "O campo deve ser do tipo date YYYY-MM-DD";
    MESSAGES["IS_TIME"] = "O campo deve ser do tipo date HH:mm";
    MESSAGES["PERIOD"] = "Os valores permitidos s\u00E3o: morning, evening, nocturnal";
    MESSAGES["ALREADY_BEEN_ACCEPTED"] = "A ordem de trabalho j\u00E1 foi aceita";
    MESSAGES["COLLECTION_ORDER_ALREADY_BEEN_ACCEPTED"] = "A ordem de coleta j\u00E1 foi aceita";
    MESSAGES["ALREADY_BEEN_ACCEPTED_WORK_ORDER"] = "Este hor\u00E1rio j\u00E1 est\u00E1 agendado em outra ordem de trabalho.";
    MESSAGES["REJECTED_SCHEDULE"] = "Instala\u00E7\u00E3o rejeitada com sucesso.";
    MESSAGES["CANCELED_SCHEDULE"] = "Instala\u00E7\u00E3o cancelada com sucesso.";
    MESSAGES["SEND_CONFIRMATION_EMAIL"] = "Um e-mail de confirma\u00E7\u00E3o foi enviado para seu e-mail de cadastro";
    MESSAGES["STATUS_SCHEDULE"] = "O status foi atualizado com sucesso";
    MESSAGES["UPDATE_TERM_USE_STATUS"] = "O status foi atualizado com sucesso";
    MESSAGES["NOT_ACCEPTED_TERM_USE"] = "O termo de uso n\u00E3o foi aceito";
    MESSAGES["PENDING_TECHNICIAN"] = "O instalador n\u00E3o est\u00E1 apto para receber ofertas!";
    MESSAGES["INVALID_INSTALLATION_ZIP_CODE"] = "C\u00F3digo do instalador inv\u00E1lido!";
    MESSAGES["MESSAGE_BLOCK"] = "Dados inv\u00E1lidos, seu login foi bloqueado, um link de redefini\u00E7\u00E3o de senha foi enviado para seu e-mail de cadastro!";
    MESSAGES["CUSTOMER_NOT_FOUND"] = "Assinante n\u00E3o encontrado!";
    MESSAGES["TECHNICIAN_NOT_FOUND"] = "T\u00E9cnico n\u00E3o encontrado!";
    MESSAGES["MSG006"] = "Usu\u00E1rio j\u00E1 cadastrado.";
})(MESSAGES || (MESSAGES = {}));


/***/ }),

/***/ "./libs/shared-things/src/lib/enums/messagesv2.enum.ts":
/*!*************************************************************!*\
  !*** ./libs/shared-things/src/lib/enums/messagesv2.enum.ts ***!
  \*************************************************************/
/*! exports provided: MESSAGES_V2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_V2", function() { return MESSAGES_V2; });
var MESSAGES_V2;
(function (MESSAGES_V2) {
    MESSAGES_V2["MSG001"] = "Opera\u00E7\u00E3o realizada com sucesso.";
    MESSAGES_V2["MSG002"] = "Dados obrigat\u00F3rios n\u00E3o informados.";
    MESSAGES_V2["MSG003"] = "Deseja realmente efetuar a opera\u00E7\u00E3o de <nome da opera\u00E7\u00E3o>? (Sim/N\u00E3o).";
    MESSAGES_V2["MSG004"] = "Nenhum registro encontrado.";
    MESSAGES_V2["MSG005"] = "Informe ao menos um crit\u00E9rio de pesquisa para prosseguir com a opera\u00E7\u00E3o.";
    MESSAGES_V2["MSG006"] = "Usu\u00E1rio j\u00E1 cadastrado.";
    MESSAGES_V2["MSG007"] = "C\u00F3digo do estabelecimento j\u00E1 cadastrado.";
    MESSAGES_V2["MSG008"] = "Percentual de desconto em fatura maior que 100%.";
    MESSAGES_V2["MSG009"] = "O valor deve ser superior a 0.";
    MESSAGES_V2["MSG010"] = "Data inv\u00E1lida.";
    MESSAGES_V2["MSG011"] = "A data inicial n\u00E3o deve ser maior que a data final.";
    MESSAGES_V2["MSG012"] = "A data final n\u00E3o deve ser maior que a data atual.";
    MESSAGES_V2["MSG013"] = "A data inicial n\u00E3o deve ser menor que a data atual.";
    MESSAGES_V2["MSG014"] = "<> inv\u00E1lido.";
    MESSAGES_V2["MSG015"] = "C\u00F3digo inv\u00E1lido.";
    MESSAGES_V2["MSG016"] = "Inclus\u00E3o/Altera\u00E7\u00E3o de <> n\u00E3o permitida!";
    MESSAGES_V2["MSG017"] = "Exclus\u00E3o n\u00E3o permitida!";
    MESSAGES_V2["MSG018"] = "Cancelamento n\u00E3o permitido!";
    MESSAGES_V2["MSG019"] = "Arquivo indispon\u00EDvel no <>.";
    MESSAGES_V2["MSG020"] = "Opera\u00E7\u00E3o de <> n\u00E3o permitida!";
    MESSAGES_V2["MSG021"] = "Sincroniza\u00E7\u00E3o efetuada com sucesso";
    MESSAGES_V2["MSG022"] = "Falta na sincroniza\u00E7\u00E3o, ser\u00E1 sincronizada novamente ap\u00F3s alguns minutos.";
    MESSAGES_V2["MSG023"] = "Serial <> j\u00E1 foi informado na ordem de servi\u00E7o <> com equipamento <>. Favor verificar!";
    MESSAGES_V2["MSG024"] = "A ordem de servi\u00E7o <> est\u00E1 com equipamento <> sem identifica\u00E7\u00E3o do n\u00FAmero de serial. Favor verificar!";
    MESSAGES_V2["MSG025"] = "Altera\u00E7\u00E3o da <> n\u00E3o permitida! Ordem de Coleta j\u00E1 aceita pelo transportador <>";
    MESSAGES_V2["MSG026"] = "Deseja realmente sair da aplica\u00E7\u00E3o? (Sim/N\u00E3o).";
    MESSAGES_V2["MSG027"] = "Existem informa\u00E7\u00F5es que n\u00E3o foram salvas, deseja realmente sair sem salvar? (Sim/N\u00E3o).";
    MESSAGES_V2["MSG028"] = "Ordem de Coleta <> n\u00E3o est\u00E1 mais dispon\u00EDvel.";
    MESSAGES_V2["MSG029"] = "Voc\u00EA digitou a senha inv\u00E1lida! Voc\u00EA tem mais <> tentativas de Login restantes.";
    MESSAGES_V2["MSG030"] = "Foi enviado um e-mail para <> com um link para o redefinir a senha.";
    MESSAGES_V2["MSG031"] = "Formatado ou tamanho inv\u00E1lido! Somente ser\u00E3o aceitos arquivos <> com o tamanho m\u00E1ximo de <>";
    MESSAGES_V2["MSG032"] = "Pedido de Venda <> n\u00E3o encontrado.";
    MESSAGES_V2["MSG033"] = "CEP do pedido de venda <> diferente do CEP informado <>.";
    MESSAGES_V2["MSG034"] = "Foi associado ao seu cadastro o usu\u00E1rio <> com CPF <>. Em caso de discord\u00E2ncia entrar em contato com o suporte t\u00E9cnico.";
    MESSAGES_V2["MSG035"] = "Existem data/hor\u00E1rio conflitantes com o cadastrado. Verifique!";
    MESSAGES_V2["MSG036"] = "A data/hora final deve ser maior que a data/hora inicial.";
    MESSAGES_V2["MSG037"] = "N\u00E3o \u00E9 poss\u00EDvel bloquear o per\u00EDodo informado pois j\u00E1 existem agendamento.";
    MESSAGES_V2["MSG038"] = "N\u00E3o foi poss\u00EDvel enviar os arquivos. Tente novamente.";
    MESSAGES_V2["MSG039"] = "O aplicativo BluTec est\u00E1 liberado para uso. Veja o tutorial de como utilizar o Aplicativo BluTec.";
    MESSAGES_V2["MSG040"] = "Ordem de Servi\u00E7o <> n\u00E3o est\u00E1 mais dispon\u00EDvel.";
    MESSAGES_V2["MSG041"] = "CEP n\u00E3o encontrado.";
})(MESSAGES_V2 || (MESSAGES_V2 = {}));


/***/ }),

/***/ "./libs/shared-things/src/lib/enums/sankhya-endpoints.enum.ts":
/*!********************************************************************!*\
  !*** ./libs/shared-things/src/lib/enums/sankhya-endpoints.enum.ts ***!
  \********************************************************************/
/*! exports provided: SankhyaEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SankhyaEndpoint", function() { return SankhyaEndpoint; });
var SankhyaEndpoint;
(function (SankhyaEndpoint) {
    SankhyaEndpoint["AUTHENTICATION"] = "/mge/service.sbr?serviceName=MobileLoginSP.login&outputType=json";
    SankhyaEndpoint["CONSULT_IN_SANKHYA"] = "/mge/service.sbr?serviceName=DbExplorerSP.executeQuery&";
    SankhyaEndpoint["FINISH_SESSION"] = "/mge/service.sbr?serviceName=MobileLoginSP.logout&outputType=json";
})(SankhyaEndpoint || (SankhyaEndpoint = {}));


/***/ }),

/***/ "./libs/shared-things/src/lib/pipes/validation.pipe.ts":
/*!*************************************************************!*\
  !*** ./libs/shared-things/src/lib/pipes/validation.pipe.ts ***!
  \*************************************************************/
/*! exports provided: ValidationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPipe", function() { return ValidationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common_exceptions_http_exception__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common/exceptions/http.exception */ "@nestjs/common/exceptions/http.exception");
/* harmony import */ var _nestjs_common_exceptions_http_exception__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common_exceptions_http_exception__WEBPACK_IMPORTED_MODULE_4__);





let ValidationPipe = class ValidationPipe {
    async transform(value, metadata) {
        if (!value) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('No data submitted');
        }
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["plainToClass"])(metatype, value);
        const errors = await Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["validate"])(object);
        if (errors.length > 0) {
            throw new _nestjs_common_exceptions_http_exception__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({ message: 'Input data validation failed', errors: this.buildError(errors) }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].BAD_REQUEST);
        }
        return value;
    }
    buildError(errors) {
        const result = {};
        errors.forEach(el => {
            let prop = el.property;
            Object.entries(el.constraints).forEach(constraint => {
                result[prop + constraint[0]] = `${constraint[1]}`;
            });
        });
        return result;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type);
    }
};
ValidationPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ValidationPipe);



/***/ }),

/***/ "./libs/shared-things/src/lib/services/config.service.ts":
/*!***************************************************************!*\
  !*** ./libs/shared-things/src/lib/services/config.service.ts ***!
  \***************************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_snake_naming_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/snake-naming.strategy */ "./libs/shared-things/src/lib/utils/snake-naming.strategy.ts");


// import { IAwsConfig } from '../../interfaces/IAwsConfig';
// import { UserSubscriber } from '../entity-subscribers/user-subscriber';
class ConfigService {
    constructor() {
        const nodeEnv = this.nodeEnv;
        dotenv__WEBPACK_IMPORTED_MODULE_0__["config"]({
            path: `.${nodeEnv}.env`,
        });
        // Replace \\n with \n to support multiline strings in AWS
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
    }
    get(key) {
        return process.env[key];
    }
    getNumber(key) {
        return Number(this.get(key));
    }
    get nodeEnv() {
        return this.get('NODE_ENV') || 'development';
    }
    get typeOrmConfig() {
        // let entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}'];
        // let migrations = [__dirname + '/../../migrations/*{.ts,.js}'];
        let entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}', __dirname + '../../libs/api-interfaces/**/*.entity{.ts,.js}'];
        let migrations = [__dirname + '/../../migrations/*{.ts,.js}'];
        if (false) {}
        return {
            entities,
            // migrations,
            keepConnectionAlive: true,
            type: 'mysql',
            port: 3306,
            host: this.get('DB_METO_HOST'),
            username: this.get('DB_METO_USERNAME'),
            password: this.get('DB_METO_PASSWORD'),
            database: this.get('DB_METO_DATABASE'),
            // username: process.env.DB_METO_USERNAME,
            // password: process.env.DB_METO_PASSWORD,
            // database: process.env.DB_METO_DATABASE,
            // subscribers: [UserSubscriber],
            migrationsRun: true,
            logging: this.nodeEnv === 'development',
            namingStrategy: new _utils_snake_naming_strategy__WEBPACK_IMPORTED_MODULE_1__["SnakeNamingStrategy"](),
            synchronize: false,
            autoLoadEntities: true,
        };
    }
}


/***/ }),

/***/ "./libs/shared-things/src/lib/shared-things.module.ts":
/*!************************************************************!*\
  !*** ./libs/shared-things/src/lib/shared-things.module.ts ***!
  \************************************************************/
/*! exports provided: SharedThingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedThingsModule", function() { return SharedThingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/config.service */ "./libs/shared-things/src/lib/services/config.service.ts");



const providers = [_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]];
let SharedThingsModule = class SharedThingsModule {
};
SharedThingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        providers,
        imports: [],
        exports: [...providers],
    })
], SharedThingsModule);



/***/ }),

/***/ "./libs/shared-things/src/lib/utils/date.utils.ts":
/*!********************************************************!*\
  !*** ./libs/shared-things/src/lib/utils/date.utils.ts ***!
  \********************************************************/
/*! exports provided: periods, compareTime, compareDateIsAfter, compareDateIsSameOrAfeter, isBetween, getTimeInterval, convertHoursToNumber, dayWeekByDate, monthByDate, dayWeekByIndex, indexByDayWeek, getRange, getNumberRange, getCurrentDateWithoutHours, formatDateWithoutHours, formatDateHours, formatDateWithHours, generateCodeWithCurrentDate, generateCodePlp, getDateNowWithouHours, calculatesTheDifferenceBetweenDates, addDays, formatByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "periods", function() { return periods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTime", function() { return compareTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDateIsAfter", function() { return compareDateIsAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDateIsSameOrAfeter", function() { return compareDateIsSameOrAfeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeInterval", function() { return getTimeInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHoursToNumber", function() { return convertHoursToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayWeekByDate", function() { return dayWeekByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthByDate", function() { return monthByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayWeekByIndex", function() { return dayWeekByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexByDayWeek", function() { return indexByDayWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRange", function() { return getRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberRange", function() { return getNumberRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateWithoutHours", function() { return getCurrentDateWithoutHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateWithoutHours", function() { return formatDateWithoutHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateHours", function() { return formatDateHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateWithHours", function() { return formatDateWithHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCodeWithCurrentDate", function() { return generateCodeWithCurrentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCodePlp", function() { return generateCodePlp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateNowWithouHours", function() { return getDateNowWithouHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatesTheDifferenceBetweenDates", function() { return calculatesTheDifferenceBetweenDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatByType", function() { return formatByType; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const week = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
];
const periods = {
    morning: ['06:00', '11:59'],
    evening: ['12:00', '17:59'],
    nocturnal: ['18:00', '23:59'],
};
function compareTime(leftTime, rightTime) {
    return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](rightTime).isAfter(leftTime);
}
function compareDateIsAfter(leftTime, rightTime) {
    return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](leftTime).isAfter(rightTime);
}
function compareDateIsSameOrAfeter(leftTime, rightTime) {
    return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](leftTime).isSameOrAfter(rightTime);
}
function isBetween(now, startDate, finalDate) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(now).isBetween(startDate, finalDate, 'day', '[]');
}
function getTimeInterval(startTime, endTime) {
    const start = moment__WEBPACK_IMPORTED_MODULE_0__(startTime, 'HH:mm');
    const end = moment__WEBPACK_IMPORTED_MODULE_0__(endTime, 'HH:mm');
    const minutes = end.diff(start, 'minutes');
    const interval = moment__WEBPACK_IMPORTED_MODULE_0__().hour(0).minute(minutes);
    return interval.format('HH:mm');
}
function convertHoursToNumber(time) {
    return moment__WEBPACK_IMPORTED_MODULE_0__["duration"](time).asHours();
}
function dayWeekByDate(date) {
    const dayWeekIndex = moment__WEBPACK_IMPORTED_MODULE_0__["utc"](date).day();
    return week[dayWeekIndex];
}
function monthByDate(date) {
    const monthIndex = moment__WEBPACK_IMPORTED_MODULE_0__["utc"](date).locale('pt-BR').format('MMM');
    return monthIndex;
}
function dayWeekByIndex(index) {
    return week[index];
}
function indexByDayWeek(dayWeek) {
    const w = [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
        'Domingo',
    ];
    return w.findIndex(item => item === dayWeek) - 1;
}
function getRange(startDate, endDate, type) {
    const fromDate = moment__WEBPACK_IMPORTED_MODULE_0__["utc"](startDate);
    const toDate = moment__WEBPACK_IMPORTED_MODULE_0__["utc"](endDate);
    const diff = toDate.diff(fromDate, type);
    const range = [];
    for (let i = 0; i < diff; i++) {
        range.push(moment__WEBPACK_IMPORTED_MODULE_0__["utc"](startDate).add(i, type));
    }
    return range;
}
function getNumberRange(start, end) {
    return [...Array(end - start + 1)].map((_, i) => start + i);
}
function getCurrentDateWithoutHours() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
}
function formatDateWithoutHours(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('YYYY-MM-DD');
}
function formatDateHours(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('HH:MM:ss');
}
function formatDateWithHours(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](date).format('YYYY-MM-DD HH:MM:ss');
}
function generateCodeWithCurrentDate() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYYMMDDHHMMssSSS');
}
function generateCodePlp() {
    return moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYYMMDD');
}
function getDateNowWithouHours() {
    return moment__WEBPACK_IMPORTED_MODULE_0__["utc"]().format('YYYY-MM-DD');
}
function calculatesTheDifferenceBetweenDates(initial, final) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(final).diff(moment__WEBPACK_IMPORTED_MODULE_0__(initial), 'days');
}
function addDays(date, days) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(date).add(days, 'day').format('YYYY-MM-DD');
}
function formatByType(date, type) {
    switch (type) {
        case 'Y':
            return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](date).format('YYYY');
            break;
        case 'M':
            return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](date).format('MM');
            break;
        case 'D':
            return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](date).format('DD');
            break;
    }
}


/***/ }),

/***/ "./libs/shared-things/src/lib/utils/email.utils.ts":
/*!*********************************************************!*\
  !*** ./libs/shared-things/src/lib/utils/email.utils.ts ***!
  \*********************************************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ "nodemailer");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nodemailer_sendgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer-sendgrid */ "nodemailer-sendgrid");
/* harmony import */ var nodemailer_sendgrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer_sendgrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pug */ "pug");
/* harmony import */ var pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pug__WEBPACK_IMPORTED_MODULE_2__);



class Email {
    constructor() { }
    send(to, title, html) {
        console.log('process.env.EMAIL_HOST', process.env.EMAIL_HOST);
        this.email = nodemailer__WEBPACK_IMPORTED_MODULE_0__["createTransport"](nodemailer_sendgrid__WEBPACK_IMPORTED_MODULE_1__({ apiKey: process.env.EMAIL_PASS }));
        const blutvEnv = `blutv.${"development"}`;
        return this.email.sendMail({
            from: `BluTV - <credenciamento@blutv.com.br`,
            to,
            subject: title,
            text: title,
            html,
        });
    }
    sendEmailPug(to, title, pathFile, params) {
        console.log('process.env.EMAIL_HOST', process.env.EMAIL_HOST);
        this.email = nodemailer__WEBPACK_IMPORTED_MODULE_0__["createTransport"](nodemailer_sendgrid__WEBPACK_IMPORTED_MODULE_1__({ apiKey: process.env.EMAIL_PASS }));
        const blutvEnv = `blutv.${"development"}`;
        return this.email.sendMail({
            from: `BluTV - credenciamento@minhablutv.com.br`,
            to,
            subject: title,
            text: title,
            html: pug__WEBPACK_IMPORTED_MODULE_2__["renderFile"](pathFile, params),
        });
    }
}


/***/ }),

/***/ "./libs/shared-things/src/lib/utils/file-upload.utils.ts":
/*!***************************************************************!*\
  !*** ./libs/shared-things/src/lib/utils/file-upload.utils.ts ***!
  \***************************************************************/
/*! exports provided: imageFileFilter, editFileName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageFileFilter", function() { return imageFileFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editFileName", function() { return editFileName; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};
const editFileName = (req, file, callback) => {
    console.log('aqqq', req.body);
    const fileExtName = Object(path__WEBPACK_IMPORTED_MODULE_0__["extname"])(file.originalname);
    callback(null, `${Date.now()}${fileExtName}`);
};


/***/ }),

/***/ "./libs/shared-things/src/lib/utils/format-data.utils.ts":
/*!***************************************************************!*\
  !*** ./libs/shared-things/src/lib/utils/format-data.utils.ts ***!
  \***************************************************************/
/*! exports provided: onlyNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return onlyNumbers; });
function onlyNumbers(value) {
    return value.replace(/\D+/g, '');
}


/***/ }),

/***/ "./libs/shared-things/src/lib/utils/jwt.utils.ts":
/*!*******************************************************!*\
  !*** ./libs/shared-things/src/lib/utils/jwt.utils.ts ***!
  \*******************************************************/
/*! exports provided: prepareToken, verifyToken, decoteToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareToken", function() { return prepareToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decoteToken", function() { return decoteToken; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

function prepareToken(payload, expiresIn = '3d') {
    const secret = process.env.TOKEN_SECRET;
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["sign"](payload, secret, { expiresIn });
}
function verifyToken(token) {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["verify"](token, process.env.TOKEN_SECRET);
}
function decoteToken(token) {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["decode"](token);
}


/***/ }),

/***/ "./libs/shared-things/src/lib/utils/password.utils.ts":
/*!************************************************************!*\
  !*** ./libs/shared-things/src/lib/utils/password.utils.ts ***!
  \************************************************************/
/*! exports provided: generateRandonPassword, comparePasswordHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandonPassword", function() { return generateRandonPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparePasswordHash", function() { return comparePasswordHash; });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_random_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-random-string */ "crypto-random-string");
/* harmony import */ var crypto_random_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_random_string__WEBPACK_IMPORTED_MODULE_1__);


const generateRandonPassword = (password) => {
    let plainText = crypto_random_string__WEBPACK_IMPORTED_MODULE_1__({ length: 5, type: 'hex' });
    if (password) {
        plainText = password;
    }
    const hash = bcryptjs__WEBPACK_IMPORTED_MODULE_0__["hashSync"](plainText, 5);
    return { plainText, hash };
};
const comparePasswordHash = async (password, hash) => {
    return await bcryptjs__WEBPACK_IMPORTED_MODULE_0__["compare"](password, hash);
};


/***/ }),

/***/ "./libs/shared-things/src/lib/utils/search-transform.utils.ts":
/*!********************************************************************!*\
  !*** ./libs/shared-things/src/lib/utils/search-transform.utils.ts ***!
  \********************************************************************/
/*! exports provided: parseSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSearch", function() { return parseSearch; });
function parseSearch(search, searchBy) {
    const searchFields = Array.isArray(searchBy)
        ? searchBy.map(f => ({ [f]: { $contL: search } }))
        : [{ [searchBy]: { $contL: search } }];
    return searchFields;
}


/***/ }),

/***/ "./libs/shared-things/src/lib/utils/snake-naming.strategy.ts":
/*!*******************************************************************!*\
  !*** ./libs/shared-things/src/lib/utils/snake-naming.strategy.ts ***!
  \*******************************************************************/
/*! exports provided: SnakeNamingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeNamingStrategy", function() { return SnakeNamingStrategy; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm/util/StringUtils */ "typeorm/util/StringUtils");
/* harmony import */ var typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__);


class SnakeNamingStrategy extends typeorm__WEBPACK_IMPORTED_MODULE_0__["DefaultNamingStrategy"] {
    tableName(className, customName) {
        return customName ? customName : Object(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(className);
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return Object(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(embeddedPrefixes.join('_')) + (customName ? customName : Object(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(propertyName));
    }
    relationName(propertyName) {
        return Object(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(propertyName);
    }
    joinColumnName(relationName, referencedColumnName) {
        return Object(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(relationName + '_' + referencedColumnName);
    }
    joinTableName(firstTableName, secondTableName, firstPropertyName, _secondPropertyName) {
        return Object(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(firstTableName + '_' + firstPropertyName.replace(/\./gi, '_') + '_' + secondTableName);
    }
    joinTableColumnName(tableName, propertyName, columnName) {
        return Object(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(tableName + '_' + (columnName ? columnName : propertyName));
    }
    classTableInheritanceParentColumnName(parentTableName, parentTableIdPropertyName) {
        return Object(typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__["snakeCase"])(`${parentTableName}_${parentTableIdPropertyName}`);
    }
}


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/duard/super-nx/meto/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nest-middlewares/helmet":
/*!*******************************************!*\
  !*** external "@nest-middlewares/helmet" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nest-middlewares/helmet");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/common/exceptions/http.exception":
/*!***********************************************************!*\
  !*** external "@nestjs/common/exceptions/http.exception" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common/exceptions/http.exception");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "@nestjsx/crud":
/*!********************************!*\
  !*** external "@nestjsx/crud" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjsx/crud");

/***/ }),

/***/ "@nestjsx/crud-typeorm":
/*!****************************************!*\
  !*** external "@nestjsx/crud-typeorm" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjsx/crud-typeorm");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "crypto-random-string":
/*!***************************************!*\
  !*** external "crypto-random-string" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-random-string");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "nodemailer-sendgrid":
/*!**************************************!*\
  !*** external "nodemailer-sendgrid" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer-sendgrid");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pug":
/*!**********************!*\
  !*** external "pug" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pug");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),

/***/ "typeorm/util/StringUtils":
/*!*******************************************!*\
  !*** external "typeorm/util/StringUtils" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm/util/StringUtils");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map