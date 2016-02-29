'use strict';

/* istanbul ignore next */
function DateRangePicker() {
  return {
    restrict: 'E',
    bindToController: {
      startDate: '=',
      endDate: '=',
      maxDate: '=',
      onClose: '&'
    },
    scope: {},
    templateUrl: 'dateRangePicker.html',
    controller: 'DateRangePickerController',
    controllerAs: 'dateRangePickerVm'
  };
}

module.exports = DateRangePicker;
