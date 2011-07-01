var assert = require("assert");
var Pagie = require("../src/pagie");

var obj = ['a', 'b', 'c'];

//1 item per page
!function() {
  var p = new Pagie(obj, 1);
  assert.equal(p.totalPages, 3, "Number of Pages");

  assert.equal(p.currentPageNumber, 1, "Current Page");

  assert.ok(p.isFirstPage(), "First Page");
  assert.ok(!p.isLastPage(), "Not Last Page");

  p.nextPage();

  assert.equal(p.currentPageNumber, 2, "Current Page");
  p.nextPage();
  assert.ok(p.isLastPage(), "Last Page");

  assert.equal(p.getCurrentPageItems()[0], 'c', "Current Page Data");

  p.jumpToPage(2);
  assert.equal(p.getCurrentPageItems()[0], 'b', "Current Page Data");

};

//2 item per page
!function() {
  var p = new Pagie(obj, 2);
  assert.equal(p.totalPages, 2, "Number of Pages");

  assert.equal(p.currentPageNumber, 1, "Current Page");

  assert.ok(p.isFirstPage(), "First Page");
  assert.ok(!p.isLastPage(), "Not Last Page");
  assert.equal(p.getCurrentPageItems().length, 2, "Current Page Data");

  p.nextPage();

  assert.equal(p.currentPageNumber, 2, "Current Page");
  assert.ok(p.isLastPage(), "Last Page");

  assert.equal(p.getCurrentPageItems().length, 1, "Current Page Data");

}();
