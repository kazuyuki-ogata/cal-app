import { Injectable } from '@angular/core';

import { Schedule } from './schedule';
import { SCHEDULES } from './mock-schedules';

@Injectable()
export class CalendarService {
    private currentDate: any = null;
    private schedules: Schedule[] = SCHEDULES;
    private selectedSchedule: Schedule = null;

    constructor() { }

    public setCurrentDate(currentDate: any) {
        this.currentDate = currentDate;
    }

    public getDispLabel() {
        return this.currentDate.getFullYear() + "年" + (this.currentDate.getMonth() + 1) + "月";
    }

    public setSelectedSchedule(selectedSchedule: Schedule) {
        this.selectedSchedule = selectedSchedule;
    }

    public getSelectedSchedule() {
        return this.selectedSchedule;
    }

    private getColumnClassNameName(inputDate: any) {
        if (inputDate.getMonth() == this.currentDate.getMonth() && inputDate.getDate() == this.currentDate.getDate()) {
            return "today-column";
        }
        return "";
    }

    private getClassName(inputDate: any): string {
        if (inputDate.getMonth() != this.currentDate.getMonth()) {
            return "day-regular-not-thismonth";
        } else if (inputDate.getDay() == 0) {
            return "day-sun";
        } else if (inputDate.getDay() == 6) {
            return "day-sat";
        }
        return "day-regular";
    }

    public getDateStr(inputDate: any): string {
        return "" + inputDate.getFullYear() + ('0' + (inputDate.getMonth() + 1)).slice(-2) + ('0' + (inputDate.getDate())).slice(-2);
    }

    private getSchedule(dateStr: string): Schedule {
        for (let s of this.schedules) {
          var sd: Schedule = s;
            if (dateStr == sd.getDateStr()) {
                return s;
            }
        }
        return new Schedule(dateStr, '');
    }

    public getDayObject(inputDate: any) {
        var columnClassName: string = this.getColumnClassNameName(inputDate);
        var className: string = this.getClassName(inputDate);
        var dayNum: string = inputDate.getDate();
        var dateStr: string = this.getDateStr(inputDate);
        var schedule: Schedule = this.getSchedule(dateStr);

        const dayObj = {
            columnClass: columnClassName,
            class: className,
            day: dayNum,
            dateStr: dateStr,
            schedule: schedule
        };

        return dayObj;
    }

    public getWeekObject(firstDayOfWeek: any) {
        var weekObj: Array<any> = [];

        var inputDay: any = firstDayOfWeek;
        for (var i: number = 0; i < 7; i++) {
            var inputDayObj = this.getDayObject(inputDay);
            weekObj.push(inputDayObj);
            inputDay.setDate(inputDay.getDate() + 1);
        }

        return weekObj;
    }

    public getWeeksObject(inputDate: any) {
        var weeksObj: Array<any> = [];

        // 月初の週初めを設定
        var firstDayOfMonth = inputDate;
        firstDayOfMonth.setDate(1);
        if (firstDayOfMonth.getDay() == 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());
        }

        for (var i: number = 0; i < 6; i++) {
            var inputWeekObj = this.getWeekObject(firstDayOfMonth);
            weeksObj.push(inputWeekObj);
        }

        return weeksObj;
    }

}
