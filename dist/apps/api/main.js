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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "CargoEntity")) __webpack_require__.d(__webpack_exports__, "CargoEntity", function() { return _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["CargoEntity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "EscolaridadeEntity")) __webpack_require__.d(__webpack_exports__, "EscolaridadeEntity", function() { return _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["EscolaridadeEntity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "LocalEntity")) __webpack_require__.d(__webpack_exports__, "LocalEntity", function() { return _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["LocalEntity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "Message")) __webpack_require__.d(__webpack_exports__, "Message", function() { return _lib_interfaces_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["Message"]; });

/* harmony import */ var _lib_entities_cargos_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargoEntity", function() { return _lib_entities_cargos_entity__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _lib_entities_locais_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalEntity", function() { return _lib_entities_locais_entity__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _lib_entities_escolaridades_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EscolaridadeEntity", function() { return _lib_entities_escolaridades_entity__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4__, "Message")) __webpack_require__.d(__webpack_exports__, "Message", function() { return _lib_interfaces_cargos_interface__WEBPACK_IMPORTED_MODULE_4__["Message"]; });

/* harmony import */ var _lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5__, "Message")) __webpack_require__.d(__webpack_exports__, "Message", function() { return _lib_interfaces_escolaridades_interface__WEBPACK_IMPORTED_MODULE_5__["Message"]; });





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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("typeorm/util/StringUtils");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@nestjsx/crud");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@nestjsx/crud-typeorm");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolaridadesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_2__);
var _a;



let ApiDatabaseService = class ApiDatabaseService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    rawSQL(sqlQuery) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const rawData = yield this.entityManager.query(sqlQuery);
            return rawData;
        });
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_snake_naming_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


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
            namingStrategy: new _utils_snake_naming_strategy__WEBPACK_IMPORTED_MODULE_1__[/* SnakeNamingStrategy */ "a"](),
            synchronize: false,
            autoLoadEntities: true,
        };
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnakeNamingStrategy; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm_util_StringUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_cargos_cargos_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_cargos_cargos_module__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _lib_escolaridades_escolaridades_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_escolaridades_escolaridades_module__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _lib_locais_locais_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_locais_locais_module__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SharedThingsModule */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



const providers = [_services_config_service__WEBPACK_IMPORTED_MODULE_2__[/* ConfigService */ "a"]];
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common_exceptions_http_exception__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _nestjs_common_exceptions_http_exception__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common_exceptions_http_exception__WEBPACK_IMPORTED_MODULE_4__);





let ValidationPipe = class ValidationPipe {
    transform(value, metadata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!value) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('No data submitted');
            }
            const { metatype } = metadata;
            if (!metatype || !this.toValidate(metatype)) {
                return value;
            }
            const object = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["plainToClass"])(metatype, value);
            const errors = yield Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["validate"])(object);
            if (errors.length > 0) {
                throw new _nestjs_common_exceptions_http_exception__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({ message: 'Input data validation failed', errors: this.buildError(errors) }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].BAD_REQUEST);
            }
            return value;
        });
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _cargos_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _cargos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);






let CargosModule = class CargosModule {
};
CargosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["CargoEntity"]])],
        controllers: [_cargos_controller__WEBPACK_IMPORTED_MODULE_4__[/* CargosController */ "a"]],
        providers: [_cargos_service__WEBPACK_IMPORTED_MODULE_5__[/* CargosService */ "a"]],
    })
], CargosModule);



/***/ }),
/* 21 */
/***/ (function(module, exports) {



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargoEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolaridadeEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolaridadesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _escolaridades_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _escolaridades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);






let EscolaridadesModule = class EscolaridadesModule {
};
EscolaridadesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__["EscolaridadeEntity"]])],
        controllers: [_escolaridades_controller__WEBPACK_IMPORTED_MODULE_4__[/* EscolaridadesController */ "a"]],
        providers: [_escolaridades_service__WEBPACK_IMPORTED_MODULE_5__[/* EscolaridadesService */ "a"]],
    })
], EscolaridadesModule);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locais_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _locais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);






let LocaisModule = class LocaisModule {
};
LocaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"].forFeature([_meto_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["LocalEntity"]])],
        controllers: [_locais_controller__WEBPACK_IMPORTED_MODULE_4__[/* LocaisController */ "a"]],
        providers: [_locais_service__WEBPACK_IMPORTED_MODULE_5__[/* LocaisService */ "a"]],
    })
], LocaisModule);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDatabaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_database_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




let ApiDatabaseModule = class ApiDatabaseModule {
};
ApiDatabaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [_api_database_controller__WEBPACK_IMPORTED_MODULE_2__[/* ApiDatabaseController */ "a"]],
        providers: [_api_database_service__WEBPACK_IMPORTED_MODULE_3__[/* ApiDatabaseService */ "a"]],
        exports: [],
    })
], ApiDatabaseModule);



/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _lib_utils_snake_naming_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _lib_shared_things_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _lib_pipes_validation_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_pipes_validation_pipe__WEBPACK_IMPORTED_MODULE_3__["a"]; });







/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common/exceptions/http.exception");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meto_api_cruds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _meto_api_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _nest_middlewares_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _nest_middlewares_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nest_middlewares_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46);
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47);













let AppModule = class AppModule {
    constructor() {
        console.log('\n\n\n\n', '=> ', "production");
        console.log('=> ', __dirname);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug('ENVIRONMENT =>', "production");
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
            // BEGIN INSERT
            _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_6__["ServeStaticModule"].forRoot({
                rootPath: Object(path__WEBPACK_IMPORTED_MODULE_8__["join"])(__dirname, '..', 'nx-app'),
                exclude: ['/api*']
            }),
            // END INSERT
            _nestjs_config__WEBPACK_IMPORTED_MODULE_5__["ConfigModule"].forRoot({
                isGlobal: true,
                load: [_config__WEBPACK_IMPORTED_MODULE_11__[/* config */ "a"]],
            }),
            _nest_middlewares_helmet__WEBPACK_IMPORTED_MODULE_3__["HelmetMiddleware"],
            _meto_api_database__WEBPACK_IMPORTED_MODULE_2__[/* ApiDatabaseModule */ "a"],
            _meto_api_cruds__WEBPACK_IMPORTED_MODULE_1__[/* CargosModule */ "a"],
            _meto_api_cruds__WEBPACK_IMPORTED_MODULE_1__[/* LocaisModule */ "c"],
            _meto_api_cruds__WEBPACK_IMPORTED_MODULE_1__[/* EscolaridadesModule */ "b"],
            // GraphQLModule.forRoot({
            //   typePaths: ['./**/*.graphql'],
            //   definitions: { path: join(process.cwd(), 'src/graphql.ts') },
            //   context: ({ req }) => ({ headers: req.headers }),
            // }),
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_7__["TypeOrmModule"].forRootAsync({
                imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_5__["ConfigModule"]],
                useClass: _database_config__WEBPACK_IMPORTED_MODULE_12__[/* DatabaseConfig */ "a"],
            }),
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_9__[/* AppController */ "a"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_10__[/* AppService */ "a"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AppModule);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargosController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _cargos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _cargos_service__WEBPACK_IMPORTED_MODULE_4__[/* CargosService */ "a"] !== "undefined" && _cargos_service__WEBPACK_IMPORTED_MODULE_4__[/* CargosService */ "a"]) === "function" ? _a : Object])
], CargosController);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolaridadesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _escolaridades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _escolaridades_service__WEBPACK_IMPORTED_MODULE_4__[/* EscolaridadesService */ "a"] !== "undefined" && _escolaridades_service__WEBPACK_IMPORTED_MODULE_4__[/* EscolaridadesService */ "a"]) === "function" ? _a : Object])
], EscolaridadesController);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaisController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _nestjsx_crud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjsx_crud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _locais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _locais_service__WEBPACK_IMPORTED_MODULE_4__[/* LocaisService */ "a"] !== "undefined" && _locais_service__WEBPACK_IMPORTED_MODULE_4__[/* LocaisService */ "a"]) === "function" ? _a : Object])
], LocaisController);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_api_database_api_database_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_api_database_api_database_module__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDatabaseController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
var _a, _b, _c;



let ApiDatabaseController = class ApiDatabaseController {
    constructor(apiDatabaseService) {
        this.apiDatabaseService = apiDatabaseService;
    }
    rawSql(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiDatabaseService.rawSQL(query.querySQL);
        });
    }
    tableFields(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiDatabaseService.tableFields(query.tableName);
        });
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _api_database_service__WEBPACK_IMPORTED_MODULE_2__[/* ApiDatabaseService */ "a"] !== "undefined" && _api_database_service__WEBPACK_IMPORTED_MODULE_2__[/* ApiDatabaseService */ "a"]) === "function" ? _c : Object])
], ApiDatabaseController);

// http://localhost:3333/api/api-database/raw-sql?querySQL=select%20*%20from%20G026
// http://localhost:3333/api/api-database/table-fields?tableName=G034


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@nest-middlewares/helmet");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
var _a, _b;




let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('hello'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"] !== "undefined" && _meto_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"]) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"]) === "function" ? _b : Object])
], AppController);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);







function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_3__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_6__[/* AppModule */ "a"]);
        app.useGlobalPipes(new _meto_shared_things__WEBPACK_IMPORTED_MODULE_5__[/* ValidationPipe */ "a"]());
        // const app = await NestFactory.create(AppModule, { logger: true });
        // app.useLogger(app.get(Logger));
        app.enableCors();
        const configService = app.get(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = configService.get('API_METO_PORT');
        const options = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__["DocumentBuilder"]()
            .setTitle('Simples API Carlos')
            .setDescription('API NestJS para Base')
            .setVersion('1.0')
            // .setBasePath('api')
            .addBearerAuth()
            .build();
        const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__["SwaggerModule"].createDocument(app, options);
        _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__["SwaggerModule"].setup('/docs', app, document);
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('AMBIENTE =>', "production");
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('API_METO_PORT =>', process.env.API_METO_PORT);
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('HOSTNAME =>', process.env.DB_METO_HOSTNAME);
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('USERNAME =>', process.env.DB_METO_USERNAME);
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('PASSWORD =>', process.env.DB_METO_PASSWORD);
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug(': DATABASE', process.env.DB_METO_DATABASE);
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map