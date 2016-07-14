import moment = require('moment');
import DateRangePickerComponent = require("../src/DateRangePicker");

function getService(serviceName) {
  let service;
  angular.mock.inject(function ($injector) {
    service = $injector.get(serviceName);
  });
  return service;
}

function createCompontent(name, component) {
  angular.mock.module(function ($compileProvider) {
    $compileProvider.component(name, component);
  });
}


describe('Shared:Component:DateRangePicker', function () {


  beforeEach(function () {
    this.now = new Date('2015-08-13T16:00:00Z');
    this.yesterday = new Date(this.now - (24 * 60 * 60 * 1000));
    createCompontent('dateRangePicker', DateRangePickerComponent);
    this.scope = getService('$rootScope').$new();
    this.$componentController = getService('$componentController');
    this.oncloseMock = jasmine.createSpy('this.oncloseMock');

  });

  it('should initially return the correct formatted date-string', function () {
    let component = this.$componentController('dateRangePicker', {$scope: this.scope, moment: moment}, {
      startDate: this.now,
      endDate: this.now
    });

    component.$onInit();

    expect(component.formattedRange).toBe(createStartEndDateString(this.now, this.now));
  });

  it('"toggled" should call on close method with updated false', function () {
    let component = this.$componentController('dateRangePicker', {$scope: this.scope, moment: moment}, {
      startDate: this.now,
      endDate: this.now,
      onClose: this.oncloseMock
    });

    component.$onInit();

    component.toggled(false);

    expect(this.oncloseMock).toHaveBeenCalledWith({updated: false, startDate: this.now, endDate: this.now});

    component.toggled(true);

    expect(this.oncloseMock.calls.count()).toBe(1);
  });

  it('"toggled" should call on close method with updated true and change formattedRange if startDate changed', function () {
    let component = this.$componentController('dateRangePicker', {$scope: this.scope, moment: moment}, {
      startDate: angular.copy(this.now),
      endDate: angular.copy(this.now),
      onClose: this.oncloseMock
    });

    component.$onInit();

    component.startDate = angular.copy(this.yesterday);
    component.update(angular.copy(this.yesterday), 'startDate');

    component.toggled(false);

    expect(component.formattedRange).toEqual(createStartEndDateString(this.yesterday, this.now));

    this.yesterday.setHours(0, 0, 0, 0);
    this.now.setHours(23, 59, 59, 0);

    expect(this.oncloseMock).toHaveBeenCalledWith({updated: true, startDate: this.yesterday, endDate: this.now});

  });

  it('"toggled" should call on close method with updated true and change formattedRange if endDate changed', function () {
    let component = this.$componentController('dateRangePicker', {$scope: this.scope, moment: moment}, {
      startDate: angular.copy(this.now),
      endDate: angular.copy(this.now),
      onClose: this.oncloseMock
    });

    component.$onInit();

    component.endDate = angular.copy(this.yesterday);
    component.update(angular.copy(this.yesterday), 'endDate');

    component.toggled(false);
    expect(component.formattedRange).toEqual(createStartEndDateString(this.now, this.yesterday));

    this.yesterday.setHours(23, 59, 59, 0);
    this.now.setHours(0, 0, 0, 0);

    expect(this.oncloseMock).toHaveBeenCalledWith({updated: true, startDate: this.now, endDate: this.yesterday});
  });

  it('"toggled" should call on close method with updated true and change formattedRange if endDate changed', function () {
    let onToggleMock = jasmine.createSpy('onToggleMock');

    let component = this.$componentController('dateRangePicker', {$scope: this.scope, moment: moment}, {
      startDate: angular.copy(this.now),
      endDate: angular.copy(this.now),
      onClose: this.oncloseMock,
      onToggle: onToggleMock
    });

    component.$onInit();

    component.endDate = angular.copy(this.yesterday);
    component.update(angular.copy(this.yesterday), 'endDate');

    component.toggled(false);
    expect(component.formattedRange).toEqual(createStartEndDateString(this.now, this.yesterday));

    this.yesterday.setHours(23, 59, 59, 0);
    this.now.setHours(0, 0, 0, 0);

    expect(onToggleMock).toHaveBeenCalledWith({isOpen: false});
    expect(this.oncloseMock).toHaveBeenCalledWith({updated: true, startDate: this.now, endDate: this.yesterday});
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
