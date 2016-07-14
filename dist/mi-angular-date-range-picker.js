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

	"use strict";
	var DateRangePicker_1 = __webpack_require__(1);
	module.exports = angular.module('mi.DateRangePicker', [])
	    .component('dateRangePicker', DateRangePicker_1.default);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * @ngInject
	 */
	var DateRangePickerController = (function () {
	    DateRangePickerController.$inject = ["$filter", "moment"];
	    function DateRangePickerController($filter, moment) {
	        this.$filter = $filter;
	        this.moment = moment;
	    }
	    DateRangePickerController.prototype.formatRange = function () {
	        return this.$filter('date')(this.startDate, 'dd.MM.yyyy') + ' - ' + this.$filter('date')(this.endDate, 'dd.MM.yyyy');
	    };
	    DateRangePickerController.prototype.toggled = function (open) {
	        if (open === false) {
	            this.endDate.setHours(23, 59, 59, 0);
	            this.startDate.setHours(0, 0, 0, 0);
	            this.onClose({ updated: this.toUpdate, startDate: this.startDate, endDate: this.endDate });
	            this.toUpdate = false;
	        }
	    };
	    DateRangePickerController.prototype.update = function (updatedValue, type) {
	        var formattedValue = this.moment(updatedValue).format('D.M.YYYY');
	        if (type === 'endDate' && formattedValue !== this.masterEndDate.format('D.M.YYYY')) {
	            this.datepickerOptionsStart.maxDate = updatedValue;
	            this.masterEndDate = this.moment(this.endDate);
	            this.opened = false;
	            this.toUpdate = true;
	        }
	        if (type === 'startDate' && formattedValue !== this.masterStartDate.format('D.M.YYYY')) {
	            this.datepickerOptionsEnd.minDate = updatedValue;
	            this.masterStartDate = this.moment(this.startDate);
	            this.toUpdate = true;
	        }
	        this.formattedRange = this.formatRange();
	    };
	    DateRangePickerController.prototype.$onInit = function () {
	        this.toUpdate = false;
	        this.masterEndDate = this.moment(this.endDate);
	        this.masterStartDate = this.moment(this.startDate);
	        this.datepickerOptionsStart = {
	            showWeeks: false,
	            maxMode: 'day',
	            maxDate: this.endDate
	        };
	        this.datepickerOptionsEnd = {
	            showWeeks: false,
	            maxMode: 'day',
	            minDate: this.startDate,
	            maxDate: this.maxDate
	        };
	        this.opened = false;
	        this.formattedRange = this.formatRange();
	    };
	    return DateRangePickerController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    bindings: {
	        startDate: '<',
	        endDate: '<',
	        maxDate: '<',
	        onClose: '&'
	    },
	    template: "\n<div class=\"date-range-picker pull-right\" uib-dropdown on-toggle=\"dateRangePickerVm.toggled(open)\" is-open=\"dateRangePickerVm.opened\">\n    <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" ng-model=\"dateRangePickerVm.formattedRange\" readonly />\n        <span class=\"input-group-btn\">\n            <button id=\"calendar\" class=\"btn\" uib-dropdown-toggle>\n                <i class=\"fa fa-calendar\"></i>\n            </button>\n        </span>\n    </div>\n    <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"calendar\" ng-click=\"$event.preventDefault();$event.stopPropagation()\">\n        <uib-datepicker class=\"datepicker pull-left\" ng-change=\"dateRangePickerVm.update(dateRangePickerVm.startDate, 'startDate')\" datepicker-options=\"dateRangePickerVm.datepickerOptionsStart\" show-button-bar=\"false\" ng-required=\"true\" ng-model=\"dateRangePickerVm.startDate\"></uib-datepicker>\n        <uib-datepicker class=\"datepicker pull-left\" ng-change=\"dateRangePickerVm.update(dateRangePickerVm.endDate, 'endDate')\" datepicker-options=\"dateRangePickerVm.datepickerOptionsEnd\"  show-button-bar=\"false\" ng-required=\"true\" ng-model=\"dateRangePickerVm.endDate\"></uib-datepicker>\n    </div>    \n</div>\n    ",
	    controller: DateRangePickerController,
	    controllerAs: 'dateRangePickerVm'
	};


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDZhYmUzYjQ4NzViZTgzODJlM2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9EYXRlUmFuZ2VQaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLDZDQUFxQyxDQUFtQixDQUFDO0FBRXpELGtCQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDO01BQzVDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSx5QkFBd0IsQ0FBQyxDQUFDOzs7Ozs7O0FDSDVELGFBQVksQ0FBQztBQU1iOztJQUVHO0FBQ0g7S0FhSSxtQ0FBb0IsT0FBc0IsRUFBVSxNQUFtQjtTQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUFlO1NBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYTtLQUN2RSxDQUFDO0tBRU8sQ0FBUjtTQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQTREO0tBQ3pILENBQUM7S0FFTSxFQUFvQjtTQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQXFCO2FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQTZEO2FBQ3pGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQzFCLENBQUM7S0FDTCxDQUFDO0tBRU0sRUFBcUM7U0FDeEMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEUsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxjQUFjLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFxQjthQUNqRixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSztTQUN6QixDQUFDO1NBRUQsQ0FBeUY7YUFDckYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7YUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFXO2FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3pCLENBQUM7U0FFRCxDQUF5QztLQUM3QyxDQUFDO0tBR00sRUFBUDtTQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBRXRCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBMEI7U0FDL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFXO1NBRW5ELElBQUksQ0FBQyxzQkFBc0IsR0FBRzthQUMxQixTQUFTLEVBQUUsS0FBSzthQUNoQixPQUFPLEVBQUUsS0FBSzthQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBTztVQUN4QixDQUFDO1NBQ0YsRUFBNEI7YUFDeEIsU0FBUyxFQUFFLEtBQUs7YUFDaEIsT0FBTyxFQUFFLEtBQUs7YUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQVM7YUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1VBQ3hCLENBQUM7U0FDRixFQUFvQjtTQUNwQixJQUFJLENBQUMsY0FBYyxDQUFzQjtLQUM3QyxDQUFDO0tBQ0wsRUFBQztBQUFELEVBQUM7QUFFRDttQkFBZTtLQUNYLFFBQVEsRUFBRTtTQUNOLE9BQWM7U0FDZCxPQUFPLEVBQUUsR0FBRztTQUNaLE9BQU8sRUFBRSxHQUFHO1NBQ1osT0FBTyxFQUFFLEdBQUc7TUFDZjtLQUNELEVBZUM7S0FDRCxVQUFVLEVBQUUseUJBQXlCO0tBQ3JDLFlBQVksRUFBRSxtQkFBbUI7RUFDcEMsQ0FBQyIsImZpbGUiOiJtaS1hbmd1bGFyLWRhdGUtcmFuZ2UtcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwNmFiZTNiNDg3NWJlODM4MmUzZlxuICoqLyIsImltcG9ydCBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgZnJvbSBcIi4vRGF0ZVJhbmdlUGlja2VyXCI7XG5cbmV4cG9ydCA9IGFuZ3VsYXIubW9kdWxlKCdtaS5EYXRlUmFuZ2VQaWNrZXInLCBbXSlcbiAgICAuY29tcG9uZW50KCdkYXRlUmFuZ2VQaWNrZXInLCBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LnRzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IE1vbWVudFN0YXRpYyA9IG1vbWVudC5Nb21lbnRTdGF0aWM7XG5pbXBvcnQgTW9tZW50ID0gbW9tZW50Lk1vbWVudDtcbmltcG9ydCBJRGF0ZXBpY2tlckNvbmZpZyA9IGFuZ3VsYXIudWkuYm9vdHN0cmFwLklEYXRlcGlja2VyQ29uZmlnO1xuaW1wb3J0IElGaWx0ZXJTZXJ2aWNlID0gYW5ndWxhci5JRmlsdGVyU2VydmljZTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29udHJvbGxlciB7XG4gICAgcHVibGljIHN0YXJ0RGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBlbmREYXRlOkRhdGU7XG4gICAgcHVibGljIG1heERhdGU6RGF0ZTtcbiAgICBwdWJsaWMgb25DbG9zZTpGdW5jdGlvbjtcbiAgICBwdWJsaWMgdG9VcGRhdGU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgb3BlbmVkOmJvb2xlYW47XG4gICAgcHVibGljIGZvcm1hdHRlZFJhbmdlOnN0cmluZztcbiAgICBwdWJsaWMgZGF0ZXBpY2tlck9wdGlvbnNTdGFydDpJRGF0ZXBpY2tlckNvbmZpZztcbiAgICBwdWJsaWMgZGF0ZXBpY2tlck9wdGlvbnNFbmQ6SURhdGVwaWNrZXJDb25maWc7XG4gICAgcHJpdmF0ZSBtYXN0ZXJFbmREYXRlOk1vbWVudDtcbiAgICBwcml2YXRlIG1hc3RlclN0YXJ0RGF0ZTpNb21lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRmaWx0ZXI6SUZpbHRlclNlcnZpY2UsIHByaXZhdGUgbW9tZW50Ok1vbWVudFN0YXRpYykge1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9ybWF0UmFuZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy4kZmlsdGVyKCdkYXRlJykodGhpcy5zdGFydERhdGUsICdkZC5NTS55eXl5JykgKyAnIC0gJyArIHRoaXMuJGZpbHRlcignZGF0ZScpKHRoaXMuZW5kRGF0ZSwgJ2RkLk1NLnl5eXknKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlZChvcGVuOmJvb2xlYW4pIHtcbiAgICAgICAgaWYgKG9wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZERhdGUuc2V0SG91cnMoMjMsNTksNTksMCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZS5zZXRIb3VycygwLDAsMCwwKTtcblxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKHt1cGRhdGVkOiB0aGlzLnRvVXBkYXRlLCBzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLCBlbmREYXRlOiB0aGlzLmVuZERhdGV9KTtcbiAgICAgICAgICAgIHRoaXMudG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUodXBkYXRlZFZhbHVlOkRhdGUsIHR5cGU6c3RyaW5nKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMubW9tZW50KHVwZGF0ZWRWYWx1ZSkuZm9ybWF0KCdELk0uWVlZWScpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2VuZERhdGUnICYmIGZvcm1hdHRlZFZhbHVlICE9PSB0aGlzLm1hc3RlckVuZERhdGUuZm9ybWF0KCdELk0uWVlZWScpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVwaWNrZXJPcHRpb25zU3RhcnQubWF4RGF0ZSA9IHVwZGF0ZWRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubWFzdGVyRW5kRGF0ZSA9IHRoaXMubW9tZW50KHRoaXMuZW5kRGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRvVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnc3RhcnREYXRlJyAmJiBmb3JtYXR0ZWRWYWx1ZSAhPT0gdGhpcy5tYXN0ZXJTdGFydERhdGUuZm9ybWF0KCdELk0uWVlZWScpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVwaWNrZXJPcHRpb25zRW5kLm1pbkRhdGUgPSB1cGRhdGVkVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm1hc3RlclN0YXJ0RGF0ZSA9IHRoaXMubW9tZW50KHRoaXMuc3RhcnREYXRlKTtcbiAgICAgICAgICAgIHRoaXMudG9VcGRhdGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtYXR0ZWRSYW5nZSA9IHRoaXMuZm9ybWF0UmFuZ2UoKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyAkb25Jbml0KCkge1xuICAgICAgICB0aGlzLnRvVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5tYXN0ZXJFbmREYXRlID0gdGhpcy5tb21lbnQodGhpcy5lbmREYXRlKTtcbiAgICAgICAgdGhpcy5tYXN0ZXJTdGFydERhdGUgPSB0aGlzLm1vbWVudCh0aGlzLnN0YXJ0RGF0ZSk7XG5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyT3B0aW9uc1N0YXJ0ID0ge1xuICAgICAgICAgICAgc2hvd1dlZWtzOiBmYWxzZSxcbiAgICAgICAgICAgIG1heE1vZGU6ICdkYXknLFxuICAgICAgICAgICAgbWF4RGF0ZTogdGhpcy5lbmREYXRlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlck9wdGlvbnNFbmQgPSB7XG4gICAgICAgICAgICBzaG93V2Vla3M6IGZhbHNlLFxuICAgICAgICAgICAgbWF4TW9kZTogJ2RheScsXG4gICAgICAgICAgICBtaW5EYXRlOiB0aGlzLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm1hdHRlZFJhbmdlID0gdGhpcy5mb3JtYXRSYW5nZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHN0YXJ0RGF0ZTogJzwnLFxuICAgICAgICBlbmREYXRlOiAnPCcsXG4gICAgICAgIG1heERhdGU6ICc8JyxcbiAgICAgICAgb25DbG9zZTogJyYnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImRhdGUtcmFuZ2UtcGlja2VyIHB1bGwtcmlnaHRcIiB1aWItZHJvcGRvd24gb24tdG9nZ2xlPVwiZGF0ZVJhbmdlUGlja2VyVm0udG9nZ2xlZChvcGVuKVwiIGlzLW9wZW49XCJkYXRlUmFuZ2VQaWNrZXJWbS5vcGVuZWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuZy1tb2RlbD1cImRhdGVSYW5nZVBpY2tlclZtLmZvcm1hdHRlZFJhbmdlXCIgcmVhZG9ubHkgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYWxlbmRhclwiIGNsYXNzPVwiYnRuXCIgdWliLWRyb3Bkb3duLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiY2FsZW5kYXJcIiBuZy1jbGljaz1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICA8dWliLWRhdGVwaWNrZXIgY2xhc3M9XCJkYXRlcGlja2VyIHB1bGwtbGVmdFwiIG5nLWNoYW5nZT1cImRhdGVSYW5nZVBpY2tlclZtLnVwZGF0ZShkYXRlUmFuZ2VQaWNrZXJWbS5zdGFydERhdGUsICdzdGFydERhdGUnKVwiIGRhdGVwaWNrZXItb3B0aW9ucz1cImRhdGVSYW5nZVBpY2tlclZtLmRhdGVwaWNrZXJPcHRpb25zU3RhcnRcIiBzaG93LWJ1dHRvbi1iYXI9XCJmYWxzZVwiIG5nLXJlcXVpcmVkPVwidHJ1ZVwiIG5nLW1vZGVsPVwiZGF0ZVJhbmdlUGlja2VyVm0uc3RhcnREYXRlXCI+PC91aWItZGF0ZXBpY2tlcj5cbiAgICAgICAgPHVpYi1kYXRlcGlja2VyIGNsYXNzPVwiZGF0ZXBpY2tlciBwdWxsLWxlZnRcIiBuZy1jaGFuZ2U9XCJkYXRlUmFuZ2VQaWNrZXJWbS51cGRhdGUoZGF0ZVJhbmdlUGlja2VyVm0uZW5kRGF0ZSwgJ2VuZERhdGUnKVwiIGRhdGVwaWNrZXItb3B0aW9ucz1cImRhdGVSYW5nZVBpY2tlclZtLmRhdGVwaWNrZXJPcHRpb25zRW5kXCIgIHNob3ctYnV0dG9uLWJhcj1cImZhbHNlXCIgbmctcmVxdWlyZWQ9XCJ0cnVlXCIgbmctbW9kZWw9XCJkYXRlUmFuZ2VQaWNrZXJWbS5lbmREYXRlXCI+PC91aWItZGF0ZXBpY2tlcj5cbiAgICA8L2Rpdj4gICAgXG48L2Rpdj5cbiAgICBgLFxuICAgIGNvbnRyb2xsZXI6IERhdGVSYW5nZVBpY2tlckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnZGF0ZVJhbmdlUGlja2VyVm0nXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0RhdGVSYW5nZVBpY2tlci50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=