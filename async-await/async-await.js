"use strict";
//REF : https://blog.logrocket.com/async-await-in-typescript/#:~:text=TypeScript%20enables%20you%20to%20type,is%20a%20wrapper%20over%20promises.
//      https://wanago.io/2018/04/16/explaining-async-await-creating-dummy-promises/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var promise_pool_1 = require("@supercharge/promise-pool");
// Return value of function in Promise <{object}> is not enforced with actual results in typescript
// Ex. Even if we dont give all returned fields form API in PokemonList interface still code works.
// and TS doesnt throw any error
function getpokemonlist(url) {
    return __awaiter(this, void 0, void 0, function () {
        var pokelist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Inside getpokemonlist function...");
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    pokelist = _a.sent();
                    return [4 /*yield*/, pokelist.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getpokemon(url) {
    return __awaiter(this, void 0, void 0, function () {
        var poke;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    poke = _a.sent();
                    return [4 /*yield*/, poke.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// async-await is syntactical suger on top of returnin Promise.
// Promise can be returned as whon below.
function getfirstpokemon(url) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            // need to resolve/reject each promise to return on sucess and failure case.
            // Promise object needs a function which returns resolve and reject methods
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var pookelist, _a, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, getpokemonlist(url)];
                            case 1:
                                pookelist = _b.sent();
                                // resolve by returning first pokemon object from results
                                console.log("resolving promise....");
                                _a = resolve;
                                return [4 /*yield*/, getpokemon(pookelist.results[0].url)];
                            case 2:
                                _a.apply(void 0, [_b.sent()]);
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _b.sent();
                                console.log("rejecting promise....");
                                reject(error_1);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var pokemonlist, _i, _a, pk_object, pokemon, e_1, firstpoke, promise_pokelist, pokelist, pokelist1, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    // to measure start time to calculate time taken by code
                    console.time('For loop execution Time');
                    return [4 /*yield*/, getpokemonlist("https://pokeapi.co/api/v2/pokemon/")];
                case 1:
                    pokemonlist = _b.sent();
                    _i = 0, _a = pokemonlist.results;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    pk_object = _a[_i];
                    return [4 /*yield*/, getpokemon(pk_object.url)];
                case 3:
                    pokemon = _b.sent();
                    console.log(pokemon.name);
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.timeEnd('For loop execution Time');
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    console.error(e_1);
                    return [3 /*break*/, 7];
                case 7: return [4 /*yield*/, getfirstpokemon("https://pokeapi.co/api/v2/pokemon/")];
                case 8:
                    firstpoke = _b.sent();
                    console.log("First pokemon name : " + firstpoke.name);
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 12, , 13]);
                    promise_pokelist = getpokemonlist("https://pokeapi.co/api/v2/pokemon/");
                    return [4 /*yield*/, promise_pokelist];
                case 10:
                    pokelist = _b.sent();
                    // while awaiting on promise getpokemonlist function is not invoked because results from promise
                    // in fullfilled state are used    
                    console.log(pokelist);
                    return [4 /*yield*/, promise_pokelist];
                case 11:
                    pokelist1 = _b.sent();
                    console.log(pokelist1);
                    return [3 /*break*/, 13];
                case 12:
                    e_2 = _b.sent();
                    console.error(e_2);
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    });
})();
// ========== Promise concurrent execution ==============
// in above function we are calling promise in for loop and awaiting to resolve it
// one by one, which can cause delays while handling large numbers. To avoid delays
// we can use promise pooling where multiple promises are executed concurrantly without 
// waiting for result. Result is collected at the end of comcurrent implimnetation.
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var pk_list, pk_array, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // to measure start time to calculate time taken by code
                    console.time('Promise all execution Time');
                    return [4 /*yield*/, getpokemonlist("https://pokeapi.co/api/v2/pokemon/")];
                case 1:
                    pk_list = _a.sent();
                    console.log(pk_list);
                    pk_array = pk_list.results.map(function (pk) { return getpokemon(pk.url); });
                    // returns promise array
                    console.log(pk_array);
                    return [4 /*yield*/, Promise.all(pk_array)];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    // End time calculation of code execution started with same lable
                    console.timeEnd('Promise all execution Time');
                    return [2 /*return*/];
            }
        });
    });
})();
/// ========== Promise pooling ==============
// In above example using promise.all which calls all the promises from provided array
// one after another without pooling or limiting requests, whihc can cause overloading
// or timeouts due to threshuld on target API's. We can use promise pooling in such case
// where we can limit number of requests made by controlling concurrancy 
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, results, errors;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, promise_pool_1.PromisePool["for"]([1, 2, 3])
                        .process(function (num) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, num * 2];
                        });
                    }); })];
                case 1:
                    _a = _b.sent(), results = _a.results, errors = _a.errors;
                    return [2 /*return*/];
            }
        });
    });
})();
