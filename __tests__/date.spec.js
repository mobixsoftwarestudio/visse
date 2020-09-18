"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var isDate_1 = __importDefault(require("date-fns/isDate"));
var index_1 = require("../src/index");
describe('Date', function () {
    it('formatDateHourAndMinutes empty', function () {
        var data = new Date();
        var result = index_1.date.formatDateHourAndMinutes({});
        expect(result).toEqual(index_1.date.formatDateHourAndMinutes({
            date: data,
            hour: 0,
            minutes: 0,
            seconds: 0
        }));
    });
    it('formatDateHourAndMinutes initial date', function () {
        var data = new Date();
        var result = index_1.date.formatDateHourAndMinutes({
            date: data,
            hour: 0,
            minutes: 0,
            seconds: 0
        });
        expect(result).toEqual(index_1.date.formatDateHourAndMinutes({
            date: data,
            hour: 0,
            minutes: 0,
            seconds: 0
        }));
    });
    it('formatDateHourAndMinutes final date', function () {
        var data = new Date();
        var result = index_1.date.formatDateHourAndMinutes({
            date: data,
            hour: 23,
            minutes: 59,
            seconds: 59
        });
        expect(result).toEqual(index_1.date.formatDateHourAndMinutes({
            date: data,
            hour: 23,
            minutes: 59,
            seconds: 59
        }));
    });
    it('Invalid Date', function () {
        expect(isDate_1["default"](1)).toEqual(false);
    });
});
