/**
 *
 * @file helper.ts
 * @description helper functions to get data from json files.
 */
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
// Modules
import path from 'path';
import { promises as fs } from 'fs';
// Utilities
import { SUCCESSFUL } from '../constants/codes';
import { ALBUMS, ARTISTS, EVENTS, GENRES, PLANS, PLAYLISTS, RADIO, SONGS, } from '../constants/api-urls';
// Local func.
import albumToLocal from '../local/album';
import artistToLocal from '../local/artist';
import eventToLocal from '../local/event';
import genreToLocal from '../local/genre';
import playlistToLocal from '../local/playlist';
import planToLocal from '../local/plan';
import radioToLocal from '../local/radio';
import songToLocal from '../local/song';
/**
 * Base api func. to read mock json file.
 * @param url
 * @returns
 */
function base(url) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = path.join(process.cwd(), "".concat(url, ".json"));
                    console.log('apiUrl =>', apiUrl);
                    return [4 /*yield*/, fs.readFile(apiUrl, 'utf8')];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, JSON.parse(data)];
            }
        });
    });
}
/**
 * Get albums data from json file
 * @returns
 */
export function getAlbums() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('getAlbums =>', ALBUMS);
                    return [4 /*yield*/, base(ALBUMS)];
                case 1:
                    response = _a.sent();
                    console.log('getAlbums response =>', response.code);
                    if (response && response.code === SUCCESSFUL) {
                        data = response.data.map(function (item) {
                            return albumToLocal(item);
                        });
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Get artists data from json file
 * @returns
 */
export function getArtists() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('getArtists =>', ARTISTS);
                    return [4 /*yield*/, base(ARTISTS)];
                case 1:
                    response = _a.sent();
                    console.log('getArtists response =>', response.code);
                    if (response && response.code === SUCCESSFUL) {
                        data = response.data.map(function (item) {
                            return artistToLocal(item);
                        });
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Get events data from json file
 * @returns
 */
export function getEvents() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log;
                    return [4 /*yield*/, base(EVENTS)];
                case 1:
                    response = _a.sent();
                    console.log('getEvents response =>', response.code);
                    if (response && response.code === SUCCESSFUL) {
                        data = response.data.map(function (item) {
                            return eventToLocal(item);
                        });
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Get genre data from json file
 * @returns
 */
export function getGenre() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('getGenre =>', GENRES);
                    return [4 /*yield*/, base(GENRES)];
                case 1:
                    response = _a.sent();
                    console.log('getGenre response =>', response.code);
                    if (response && response.code === SUCCESSFUL) {
                        data = response.data.map(function (item) {
                            return genreToLocal(item);
                        });
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Get plans data from json file
 * @returns
 */
export function getPlans() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('getPlans =>', PLANS);
                    return [4 /*yield*/, base(PLANS)];
                case 1:
                    response = _a.sent();
                    console.log('getPlans response =>', response.code);
                    if (response && response.code === SUCCESSFUL) {
                        data = response.data.map(function (item) {
                            return planToLocal(item);
                        });
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Get playlist data from json file
 * @returns
 */
export function getPlaylist() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console;
                    return [4 /*yield*/, base(PLAYLISTS)];
                case 1:
                    response = _a.sent();
                    console.log('getPlaylist response =>', response.code);
                    if (response && response.code === SUCCESSFUL) {
                        data = response.data.map(function (item) {
                            return playlistToLocal(item);
                        });
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Get radio data from json file
 * @returns
 */
export function getRadio() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console;
                    return [4 /*yield*/, base(RADIO)];
                case 1:
                    response = _a.sent();
                    console.log('getRadio response =>', response.code);
                    if (response && response.code === SUCCESSFUL) {
                        data = response.data.map(function (item) {
                            return radioToLocal(item);
                        });
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Get songs data from json file
 * @returns
 */
export function getSongs() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, base(SONGS)];
                case 1:
                    response = _a.sent();
                    if (response && response.code === SUCCESSFUL) {
                        data = response.data.map(function (item) {
                            return songToLocal(item);
                        });
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
