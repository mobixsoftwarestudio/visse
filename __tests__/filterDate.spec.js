"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
var index_2 = require("../src/index");
describe('Filter', function () {
    it('QueryString empty', function () {
        var req = {
            query: {}
        };
        var result = index_1.filterDate.filterQueryStringDate(req);
        expect(result).toEqual({});
    });
    it('QueryString createdAtInitial', function () {
        var newD = new Date();
        var req = {
            query: {
                createdAtInitial: newD
            }
        };
        var result = index_1.filterDate.filterQueryStringDate(req);
        expect(result).toEqual({
            createdAt: {
                $gte: index_2.date.formatDateHourAndMinutes({
                    date: newD,
                    hour: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
        });
    });
    it('QueryString createdAtFinal', function () {
        var newD = new Date();
        var req = {
            query: {
                createdAtFinal: newD
            }
        };
        var result = index_1.filterDate.filterQueryStringDate(req);
        expect(result).toEqual({
            createdAt: {
                $lte: index_2.date.formatDateHourAndMinutes({
                    date: newD,
                    hour: 23,
                    minutes: 59,
                    seconds: 59
                })
            }
        });
    });
    it('QueryString createdAtInitial and createdAtFinal', function () {
        var newD = new Date();
        var req = {
            query: {
                createdAtInitial: newD,
                createdAtFinal: newD
            }
        };
        var result = index_1.filterDate.filterQueryStringDate(req);
        expect(result).toEqual({
            createdAt: {
                $lte: index_2.date.formatDateHourAndMinutes({
                    date: newD,
                    hour: 23,
                    minutes: 59,
                    seconds: 59
                }),
                $gte: index_2.date.formatDateHourAndMinutes({
                    date: newD,
                    hour: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
        });
    });
    it('QueryString updatedAtInitial', function () {
        var newD = new Date();
        var req = {
            query: {
                updatedAtInitial: newD
            }
        };
        var result = index_1.filterDate.filterQueryStringDate(req);
        expect(result).toEqual({
            updatedAt: {
                $gte: index_2.date.formatDateHourAndMinutes({
                    date: newD,
                    hour: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
        });
    });
    it('QueryString updatedAtFinal', function () {
        var newD = new Date();
        var req = {
            query: {
                updatedAtFinal: newD
            }
        };
        var result = index_1.filterDate.filterQueryStringDate(req);
        expect(result).toEqual({
            updatedAt: {
                $lte: index_2.date.formatDateHourAndMinutes({
                    date: newD,
                    hour: 23,
                    minutes: 59,
                    seconds: 59
                })
            }
        });
    });
    it('QueryString updatedAtInitial and updatedAtFinal', function () {
        var newD = new Date();
        var req = {
            query: {
                updatedAtInitial: newD,
                updatedAtFinal: newD
            }
        };
        var result = index_1.filterDate.filterQueryStringDate(req);
        expect(result).toEqual({
            updatedAt: {
                $lte: index_2.date.formatDateHourAndMinutes({
                    date: newD,
                    hour: 23,
                    minutes: 59,
                    seconds: 59
                }),
                $gte: index_2.date.formatDateHourAndMinutes({
                    date: newD,
                    hour: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
        });
    });
});
