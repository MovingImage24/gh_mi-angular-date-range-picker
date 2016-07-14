'use strict';
import MomentStatic = moment.MomentStatic;
import Moment = moment.Moment;
import IDatepickerConfig = angular.ui.bootstrap.IDatepickerConfig;
import IFilterService = angular.IFilterService;

/**
 * @ngInject
 */
class DateRangePickerController {
    public startDate:Date;
    public endDate:Date;
    public maxDate:Date;
    public onClose:Function;
    public onToggle:Function;
    public toUpdate:boolean;
    public opened:boolean;
    public formattedRange:string;
    public datepickerOptionsStart:IDatepickerConfig;
    public datepickerOptionsEnd:IDatepickerConfig;
    private masterEndDate:Moment;
    private masterStartDate:Moment;

    constructor(private $filter:IFilterService, private moment:MomentStatic) {
    }

    private formatRange():string {
        return this.$filter('date')(this.startDate, 'dd.MM.yyyy') + ' - ' + this.$filter('date')(this.endDate, 'dd.MM.yyyy');
    }

    public toggled(open:boolean) {
        if (this.onToggle) {
            this.onToggle({isOpen: open});
        }

        if (open === false) {
            this.endDate.setHours(23,59,59,0);
            this.startDate.setHours(0,0,0,0);

            this.onClose({updated: this.toUpdate, startDate: this.startDate, endDate: this.endDate});
            this.toUpdate = false;
        }
    }

    public update(updatedValue:Date, type:string) {
        let formattedValue = this.moment(updatedValue).format('D.M.YYYY');
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
    }


    public $onInit() {
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
    }
}

export = {
    bindings: {
        startDate: '<',
        endDate: '<',
        maxDate: '<',
        onClose: '&',
        onToggle: '&?',
    },
    template: `
<div class="date-range-picker pull-right" uib-dropdown on-toggle="dateRangePickerVm.toggled(open)" is-open="dateRangePickerVm.opened">
    <div class="input-group">
        <input type="text" class="form-control" ng-model="dateRangePickerVm.formattedRange" readonly />
        <span class="input-group-btn">
            <button id="calendar" class="btn" uib-dropdown-toggle>
                <i class="fa fa-calendar"></i>
            </button>
        </span>
    </div>
    <div class="dropdown-menu" role="menu" aria-labelledby="calendar" ng-click="$event.preventDefault();$event.stopPropagation()">
        <uib-datepicker class="datepicker pull-left" ng-change="dateRangePickerVm.update(dateRangePickerVm.startDate, 'startDate')" datepicker-options="dateRangePickerVm.datepickerOptionsStart" show-button-bar="false" ng-required="true" ng-model="dateRangePickerVm.startDate"></uib-datepicker>
        <uib-datepicker class="datepicker pull-left" ng-change="dateRangePickerVm.update(dateRangePickerVm.endDate, 'endDate')" datepicker-options="dateRangePickerVm.datepickerOptionsEnd"  show-button-bar="false" ng-required="true" ng-model="dateRangePickerVm.endDate"></uib-datepicker>
    </div>    
</div>
    `,
    controller: DateRangePickerController,
    controllerAs: 'dateRangePickerVm'
};