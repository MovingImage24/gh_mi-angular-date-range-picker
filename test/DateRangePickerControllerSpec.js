'use strict';

var DateRangePickerController = require('../src/DateRangePickerController');

describe('DateRangePickerController', function () {
  var createController, $scope, now, yesterday, oncloseMock;

  beforeEach(function () {
    now = new Date('2015-08-13T16:00:00Z');
    yesterday = new Date(now - (24 * 60 * 60 * 1000));

    angular.mock.inject(function ($injector) {
      var $controller = $injector.get('$controller');
      oncloseMock = jasmine.createSpy('oncloseMock');
      $scope = $injector.get('$rootScope');
      createController = function () {
        var injections = {
            '$filter': $injector.get('$filter'),
            '$scope': $scope
          },
          locals = {
            startDate: now,
            endDate: now,
            onClose: oncloseMock
          },
          controller = $controller(DateRangePickerController, injections, locals);

        $scope.dateRangePickerVm = controller;
        $scope.$apply();

        return controller;
      };
    });
  });

  it('should initially return the correct formatted date-string', function () {
    var controller = createController();

    expect(controller.formattedRange).toBe(createStartEndDateString(now, now));
  });

  it('"toggled" should call on close method with updated false', function () {
    var controller = createController();

    controller.toggled(false);

    expect(oncloseMock).toHaveBeenCalledWith({updated: false});
  });

  it('"toggled" should call on close method with updated true and change formattedRange if startDate changed', function () {
    var controller = createController();

    $scope.dateRangePickerVm.startDate = yesterday;
    $scope.$apply();

    controller.toggled(false);

    expect(oncloseMock).toHaveBeenCalledWith({updated: true});
    expect(controller.formattedRange).toEqual(createStartEndDateString(yesterday, now));
  });

  it('"toggled" should call on close method with updated true and change formattedRange if endDate changed', function () {
    var controller = createController();

    $scope.dateRangePickerVm.endDate = yesterday;
    $scope.$apply();

    controller.toggled(false);

    expect(oncloseMock).toHaveBeenCalledWith({updated: true});
    expect(controller.formattedRange).toEqual(createStartEndDateString(now, yesterday));
  });

  function createStartEndDateString(start, end) {
    function createDateString(date) {
      return [
        ('0' + date.getUTCDate()).slice(-2),
        ('0' + (date.getUTCMonth() + 1)).slice(-2),
        date.getUTCFullYear()
      ].join('.');
    }

    return createDateString(start) + ' - ' + createDateString(end);
  }
});
