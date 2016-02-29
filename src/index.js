'use strict';

/**
 * @ngInject
 */
var DateRangePicker = require('./DateRangePicker'),
    DateRangePickerController = require('./DateRangePickerController');

module.exports = angular
    .module('mi.DateRangePicker', [])
    .controller('DateRangePickerController', DateRangePickerController)
    .directive('DateRangePicker', DateRangePicker);
