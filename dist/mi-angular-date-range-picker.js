/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @ngInject
	 */
	var DateRangePicker = __webpack_require__(1),
	    DateRangePickerController = __webpack_require__(2);

	module.exports = angular
	    .module('mi.DateRangePicker', [])
	    .controller('DateRangePickerController', DateRangePickerController)
	    .directive('DateRangePicker', DateRangePicker);


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

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
	DateRangePickerController.$inject = ["$filter", "$scope"];

	module.exports = DateRangePickerController;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTQ0N2M0NGNmZTg5ODkxNDZjNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9EYXRlUmFuZ2VQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGVSYW5nZVBpY2tlckNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJtaS1hbmd1bGFyLWRhdGUtcmFuZ2UtcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5NDQ3YzQ0Y2ZlODk4OTE0NmM0ZFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xudmFyIERhdGVSYW5nZVBpY2tlciA9IHJlcXVpcmUoJy4vRGF0ZVJhbmdlUGlja2VyJyksXG4gICAgRGF0ZVJhbmdlUGlja2VyQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vRGF0ZVJhbmdlUGlja2VyQ29udHJvbGxlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXJcbiAgICAubW9kdWxlKCdtaS5EYXRlUmFuZ2VQaWNrZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignRGF0ZVJhbmdlUGlja2VyQ29udHJvbGxlcicsIERhdGVSYW5nZVBpY2tlckNvbnRyb2xsZXIpXG4gICAgLmRpcmVjdGl2ZSgnRGF0ZVJhbmdlUGlja2VyJywgRGF0ZVJhbmdlUGlja2VyKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBEYXRlUmFuZ2VQaWNrZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB7XG4gICAgICBzdGFydERhdGU6ICc9JyxcbiAgICAgIGVuZERhdGU6ICc9JyxcbiAgICAgIG1heERhdGU6ICc9JyxcbiAgICAgIG9uQ2xvc2U6ICcmJ1xuICAgIH0sXG4gICAgc2NvcGU6IHt9LFxuICAgIHRlbXBsYXRlVXJsOiAnZGF0ZVJhbmdlUGlja2VyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdEYXRlUmFuZ2VQaWNrZXJDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdkYXRlUmFuZ2VQaWNrZXJWbSdcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRlUmFuZ2VQaWNrZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL0RhdGVSYW5nZVBpY2tlci5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gRGF0ZVJhbmdlUGlja2VyQ29udHJvbGxlcigkZmlsdGVyLCAkc2NvcGUpIHtcbiAgdmFyIHZtID0gdGhpcyxcbiAgICAgIHRvVXBkYXRlID0gZmFsc2U7XG5cbiAgdm0ub3BlbmVkID0gZmFsc2U7XG4gIHZtLmZvcm1hdHRlZFJhbmdlID0gZm9ybWF0UmFuZ2Uodm0uc3RhcnREYXRlLCB2bS5lbmREYXRlKTtcblxuICB2bS50b2dnbGVkID0gZnVuY3Rpb24ob3Blbikge1xuICAgIGlmIChvcGVuID09PSBmYWxzZSkge1xuICAgICAgdm0ub25DbG9zZSh7dXBkYXRlZDogdG9VcGRhdGV9KTtcbiAgICAgIHRvVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS4kd2F0Y2goJ2RhdGVSYW5nZVBpY2tlclZtLmVuZERhdGUnLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgdm0uZm9ybWF0dGVkUmFuZ2UgPSBmb3JtYXRSYW5nZSh2bS5zdGFydERhdGUsIG5ld1ZhbHVlKTtcbiAgICAgIHZtLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdG9VcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgJHNjb3BlLiR3YXRjaCgnZGF0ZVJhbmdlUGlja2VyVm0uc3RhcnREYXRlJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHZtLmZvcm1hdHRlZFJhbmdlID0gZm9ybWF0UmFuZ2UobmV3VmFsdWUsIHZtLmVuZERhdGUpO1xuICAgICAgdG9VcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gZm9ybWF0UmFuZ2Uoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIoJ2RhdGUnKShzdGFydERhdGUsICdkZC5NTS55eXl5JykgKyAnIC0gJyArICRmaWx0ZXIoJ2RhdGUnKShlbmREYXRlLCAnZGQuTU0ueXl5eScpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0ZVJhbmdlUGlja2VyQ29udHJvbGxlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvRGF0ZVJhbmdlUGlja2VyQ29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=