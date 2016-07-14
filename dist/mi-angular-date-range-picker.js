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
	var DateRangePickerComponent = __webpack_require__(1);
	module.exports = angular.module('mi.DateRangePicker', [])
	    .component('dateRangePicker', DateRangePickerComponent);


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
	        if (this.onToggle) {
	            this.onToggle({ isOpen: open });
	        }
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
	module.exports = {
	    bindings: {
	        startDate: '<',
	        endDate: '<',
	        maxDate: '<',
	        onClose: '&',
	        onToggle: '&?',
	    },
	    template: "\n<div class=\"date-range-picker pull-right\" uib-dropdown on-toggle=\"dateRangePickerVm.toggled(open)\" is-open=\"dateRangePickerVm.opened\">\n    <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" ng-model=\"dateRangePickerVm.formattedRange\" readonly />\n        <span class=\"input-group-btn\">\n            <button id=\"calendar\" class=\"btn\" uib-dropdown-toggle>\n                <i class=\"fa fa-calendar\"></i>\n            </button>\n        </span>\n    </div>\n    <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"calendar\" ng-click=\"$event.preventDefault();$event.stopPropagation()\">\n        <uib-datepicker class=\"datepicker pull-left\" ng-change=\"dateRangePickerVm.update(dateRangePickerVm.startDate, 'startDate')\" datepicker-options=\"dateRangePickerVm.datepickerOptionsStart\" show-button-bar=\"false\" ng-required=\"true\" ng-model=\"dateRangePickerVm.startDate\"></uib-datepicker>\n        <uib-datepicker class=\"datepicker pull-left\" ng-change=\"dateRangePickerVm.update(dateRangePickerVm.endDate, 'endDate')\" datepicker-options=\"dateRangePickerVm.datepickerOptionsEnd\"  show-button-bar=\"false\" ng-required=\"true\" ng-model=\"dateRangePickerVm.endDate\"></uib-datepicker>\n    </div>    \n</div>\n    ",
	    controller: DateRangePickerController,
	    controllerAs: 'dateRangePickerVm'
	};


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGYzNTRlMWI3MGIwZjQ3ZjAyNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9EYXRlUmFuZ2VQaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLEtBQU8sd0JBQXdCLHVCQUFXLENBQW1CLENBQUMsQ0FBQztBQUUvRCxrQkFBUyxPQUFPLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztNQUM1QyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzs7Ozs7OztBQ0g1RCxhQUFZLENBQUM7QUFNYjs7SUFFRztBQUNIO0tBY0ksbUNBQW9CLE9BQXNCLEVBQVUsTUFBbUI7U0FBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBZTtTQUFVLFdBQU0sR0FBTixNQUFNLENBQWE7S0FDdkUsQ0FBQztLQUVPLENBQVI7U0FDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxFQUE0RDtLQUN6SCxDQUFDO0tBRU0sRUFBb0I7U0FDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFnQjtTQUNsQyxDQUFDO1NBRUQsQ0FBcUI7YUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFxQjthQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUVqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUE2RDthQUN6RixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUMxQixDQUFDO0tBQ0wsQ0FBQztLQUVNLEVBQXFDO1NBQ3hDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xFLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksY0FBYyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBcUI7YUFDakYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7YUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUUvQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUs7U0FDekIsQ0FBQztTQUVELENBQXlGO2FBQ3JGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO2FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBVzthQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN6QixDQUFDO1NBRUQsQ0FBeUM7S0FDN0MsQ0FBQztLQUdNLEVBQVA7U0FDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUV0QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQTBCO1NBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBVztTQUVuRCxJQUFJLENBQUMsc0JBQXNCLEdBQUc7YUFDMUIsU0FBUyxFQUFFLEtBQUs7YUFDaEIsT0FBTyxFQUFFLEtBQUs7YUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQU87VUFDeEIsQ0FBQztTQUNGLEVBQTRCO2FBQ3hCLFNBQVMsRUFBRSxLQUFLO2FBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFTO2FBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztVQUN4QixDQUFDO1NBQ0YsRUFBb0I7U0FDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBc0I7S0FDN0MsQ0FBQztLQUNMLEVBQUM7QUFBRCxFQUFDO0FBRUQsTUFBUztLQUNMLFFBQVEsRUFBRTtTQUNOLE9BQWM7U0FDZCxPQUFPLEVBQUUsR0FBRztTQUNaLE9BQU8sRUFBRSxHQUFHO1NBQ1osT0FBTyxFQUFFLEdBQUc7U0FDWixRQUFRLEVBQUUsR0FBSTtNQUNqQjtLQUNELEVBZUM7S0FDRCxVQUFVLEVBQUUseUJBQXlCO0tBQ3JDLFlBQVksRUFBRSxtQkFBbUI7RUFDcEMsQ0FBQyIsImZpbGUiOiJtaS1hbmd1bGFyLWRhdGUtcmFuZ2UtcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZjM1NGUxYjcwYjBmNDdmMDI0NVxuICoqLyIsImltcG9ydCBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgPSByZXF1aXJlKFwiLi9EYXRlUmFuZ2VQaWNrZXJcIik7XG5cbmV4cG9ydCA9IGFuZ3VsYXIubW9kdWxlKCdtaS5EYXRlUmFuZ2VQaWNrZXInLCBbXSlcbiAgICAuY29tcG9uZW50KCdkYXRlUmFuZ2VQaWNrZXInLCBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LnRzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IE1vbWVudFN0YXRpYyA9IG1vbWVudC5Nb21lbnRTdGF0aWM7XG5pbXBvcnQgTW9tZW50ID0gbW9tZW50Lk1vbWVudDtcbmltcG9ydCBJRGF0ZXBpY2tlckNvbmZpZyA9IGFuZ3VsYXIudWkuYm9vdHN0cmFwLklEYXRlcGlja2VyQ29uZmlnO1xuaW1wb3J0IElGaWx0ZXJTZXJ2aWNlID0gYW5ndWxhci5JRmlsdGVyU2VydmljZTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29udHJvbGxlciB7XG4gICAgcHVibGljIHN0YXJ0RGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBlbmREYXRlOkRhdGU7XG4gICAgcHVibGljIG1heERhdGU6RGF0ZTtcbiAgICBwdWJsaWMgb25DbG9zZTpGdW5jdGlvbjtcbiAgICBwdWJsaWMgb25Ub2dnbGU6RnVuY3Rpb247XG4gICAgcHVibGljIHRvVXBkYXRlOmJvb2xlYW47XG4gICAgcHVibGljIG9wZW5lZDpib29sZWFuO1xuICAgIHB1YmxpYyBmb3JtYXR0ZWRSYW5nZTpzdHJpbmc7XG4gICAgcHVibGljIGRhdGVwaWNrZXJPcHRpb25zU3RhcnQ6SURhdGVwaWNrZXJDb25maWc7XG4gICAgcHVibGljIGRhdGVwaWNrZXJPcHRpb25zRW5kOklEYXRlcGlja2VyQ29uZmlnO1xuICAgIHByaXZhdGUgbWFzdGVyRW5kRGF0ZTpNb21lbnQ7XG4gICAgcHJpdmF0ZSBtYXN0ZXJTdGFydERhdGU6TW9tZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkZmlsdGVyOklGaWx0ZXJTZXJ2aWNlLCBwcml2YXRlIG1vbWVudDpNb21lbnRTdGF0aWMpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvcm1hdFJhbmdlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZpbHRlcignZGF0ZScpKHRoaXMuc3RhcnREYXRlLCAnZGQuTU0ueXl5eScpICsgJyAtICcgKyB0aGlzLiRmaWx0ZXIoJ2RhdGUnKSh0aGlzLmVuZERhdGUsICdkZC5NTS55eXl5Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZWQob3Blbjpib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLm9uVG9nZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVG9nZ2xlKHtpc09wZW46IG9wZW59KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5lbmREYXRlLnNldEhvdXJzKDIzLDU5LDU5LDApO1xuICAgICAgICAgICAgdGhpcy5zdGFydERhdGUuc2V0SG91cnMoMCwwLDAsMCk7XG5cbiAgICAgICAgICAgIHRoaXMub25DbG9zZSh7dXBkYXRlZDogdGhpcy50b1VwZGF0ZSwgc3RhcnREYXRlOiB0aGlzLnN0YXJ0RGF0ZSwgZW5kRGF0ZTogdGhpcy5lbmREYXRlfSk7XG4gICAgICAgICAgICB0aGlzLnRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKHVwZGF0ZWRWYWx1ZTpEYXRlLCB0eXBlOnN0cmluZykge1xuICAgICAgICBsZXQgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLm1vbWVudCh1cGRhdGVkVmFsdWUpLmZvcm1hdCgnRC5NLllZWVknKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdlbmREYXRlJyAmJiBmb3JtYXR0ZWRWYWx1ZSAhPT0gdGhpcy5tYXN0ZXJFbmREYXRlLmZvcm1hdCgnRC5NLllZWVknKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlcGlja2VyT3B0aW9uc1N0YXJ0Lm1heERhdGUgPSB1cGRhdGVkVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm1hc3RlckVuZERhdGUgPSB0aGlzLm1vbWVudCh0aGlzLmVuZERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50b1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3N0YXJ0RGF0ZScgJiYgZm9ybWF0dGVkVmFsdWUgIT09IHRoaXMubWFzdGVyU3RhcnREYXRlLmZvcm1hdCgnRC5NLllZWVknKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlcGlja2VyT3B0aW9uc0VuZC5taW5EYXRlID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5tYXN0ZXJTdGFydERhdGUgPSB0aGlzLm1vbWVudCh0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnRvVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVkUmFuZ2UgPSB0aGlzLmZvcm1hdFJhbmdlKCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50b1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubWFzdGVyRW5kRGF0ZSA9IHRoaXMubW9tZW50KHRoaXMuZW5kRGF0ZSk7XG4gICAgICAgIHRoaXMubWFzdGVyU3RhcnREYXRlID0gdGhpcy5tb21lbnQodGhpcy5zdGFydERhdGUpO1xuXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlck9wdGlvbnNTdGFydCA9IHtcbiAgICAgICAgICAgIHNob3dXZWVrczogZmFsc2UsXG4gICAgICAgICAgICBtYXhNb2RlOiAnZGF5JyxcbiAgICAgICAgICAgIG1heERhdGU6IHRoaXMuZW5kRGF0ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGVwaWNrZXJPcHRpb25zRW5kID0ge1xuICAgICAgICAgICAgc2hvd1dlZWtzOiBmYWxzZSxcbiAgICAgICAgICAgIG1heE1vZGU6ICdkYXknLFxuICAgICAgICAgICAgbWluRGF0ZTogdGhpcy5zdGFydERhdGUsXG4gICAgICAgICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZWRSYW5nZSA9IHRoaXMuZm9ybWF0UmFuZ2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCA9IHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBzdGFydERhdGU6ICc8JyxcbiAgICAgICAgZW5kRGF0ZTogJzwnLFxuICAgICAgICBtYXhEYXRlOiAnPCcsXG4gICAgICAgIG9uQ2xvc2U6ICcmJyxcbiAgICAgICAgb25Ub2dnbGU6ICcmPycsXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImRhdGUtcmFuZ2UtcGlja2VyIHB1bGwtcmlnaHRcIiB1aWItZHJvcGRvd24gb24tdG9nZ2xlPVwiZGF0ZVJhbmdlUGlja2VyVm0udG9nZ2xlZChvcGVuKVwiIGlzLW9wZW49XCJkYXRlUmFuZ2VQaWNrZXJWbS5vcGVuZWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuZy1tb2RlbD1cImRhdGVSYW5nZVBpY2tlclZtLmZvcm1hdHRlZFJhbmdlXCIgcmVhZG9ubHkgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYWxlbmRhclwiIGNsYXNzPVwiYnRuXCIgdWliLWRyb3Bkb3duLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiY2FsZW5kYXJcIiBuZy1jbGljaz1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICA8dWliLWRhdGVwaWNrZXIgY2xhc3M9XCJkYXRlcGlja2VyIHB1bGwtbGVmdFwiIG5nLWNoYW5nZT1cImRhdGVSYW5nZVBpY2tlclZtLnVwZGF0ZShkYXRlUmFuZ2VQaWNrZXJWbS5zdGFydERhdGUsICdzdGFydERhdGUnKVwiIGRhdGVwaWNrZXItb3B0aW9ucz1cImRhdGVSYW5nZVBpY2tlclZtLmRhdGVwaWNrZXJPcHRpb25zU3RhcnRcIiBzaG93LWJ1dHRvbi1iYXI9XCJmYWxzZVwiIG5nLXJlcXVpcmVkPVwidHJ1ZVwiIG5nLW1vZGVsPVwiZGF0ZVJhbmdlUGlja2VyVm0uc3RhcnREYXRlXCI+PC91aWItZGF0ZXBpY2tlcj5cbiAgICAgICAgPHVpYi1kYXRlcGlja2VyIGNsYXNzPVwiZGF0ZXBpY2tlciBwdWxsLWxlZnRcIiBuZy1jaGFuZ2U9XCJkYXRlUmFuZ2VQaWNrZXJWbS51cGRhdGUoZGF0ZVJhbmdlUGlja2VyVm0uZW5kRGF0ZSwgJ2VuZERhdGUnKVwiIGRhdGVwaWNrZXItb3B0aW9ucz1cImRhdGVSYW5nZVBpY2tlclZtLmRhdGVwaWNrZXJPcHRpb25zRW5kXCIgIHNob3ctYnV0dG9uLWJhcj1cImZhbHNlXCIgbmctcmVxdWlyZWQ9XCJ0cnVlXCIgbmctbW9kZWw9XCJkYXRlUmFuZ2VQaWNrZXJWbS5lbmREYXRlXCI+PC91aWItZGF0ZXBpY2tlcj5cbiAgICA8L2Rpdj4gICAgXG48L2Rpdj5cbiAgICBgLFxuICAgIGNvbnRyb2xsZXI6IERhdGVSYW5nZVBpY2tlckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnZGF0ZVJhbmdlUGlja2VyVm0nXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0RhdGVSYW5nZVBpY2tlci50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=