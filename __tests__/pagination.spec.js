"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
describe('Pagination', function () {
    it('pagination', function () {
        var result = index_1.pagination({});
        expect(result).toEqual({
            meta: {
                total_count: 0,
                total_pages: Math.ceil(0 / 15),
                current_page: 0,
                current_count: 15,
                items_per_page: 15
            },
            results: []
        });
    });
});
