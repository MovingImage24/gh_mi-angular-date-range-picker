'use strict';

/**
 * @ngInject
 */
function DateRangePickerController($filter, $scope) {
  var vm = this,
      toUpdate = false;

  vm.opened = false;
  vm.formattedRange = formatRange(vm.startDate, vm.endDate);

  vm.toggled = function(open) {
    if (open === false) {
      vm.onClose({updated: toUpdate});
      toUpdate = false;
    }
  };

  $scope.$watch('dateRangePickerVm.endDate', function (newValue, oldValue) {
    if (newValue !== oldValue) {
      vm.formattedRange = formatRange(vm.startDate, newValue);
      vm.opened = false;
      toUpdate = true;
    }
  });

  $scope.$watch('dateRangePickerVm.startDate', function (newValue, oldValue) {
    if (newValue !== oldValue) {
      vm.formattedRange = formatRange(newValue, vm.endDate);
      toUpdate = true;
    }
  });

  function formatRange(startDate, endDate) {
    return $filter('date')(startDate, 'dd.MM.yyyy') + ' - ' + $filter('date')(endDate, 'dd.MM.yyyy');
  }
}

module.exports = DateRangePickerController;
