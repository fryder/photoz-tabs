'use strict';

describe('module: main, controller: Multi-imageCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MultiImageCtrl;
  beforeEach(inject(function ($controller) {
    MultiImageCtrl = $controller('MultiImageCtrl');
  }));

  it('should do something', function () {
    expect(!!MultiImageCtrl).toBe(true);
  });

});
