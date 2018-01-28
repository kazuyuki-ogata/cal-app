import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
    private currentDate: any = null;

    constructor() { }

    public setCurrentDate(currentDate: any) {
        this.currentDate = currentDate;
    }

    public getDispLabel() {
        return this.currentDate.getFullYear() + "年" + (this.currentDate.getMonth() + 1) + "月";
    }

    private getClassName(inputDate: any) {
        if (inputDate.getMonth() != this.currentDate.getMonth()) {
            return "day-regular-not-thismonth";
        } else if (inputDate.getDay() == 0) {
            return "day-sun";
        } else if (inputDate.getDay() == 6) {
            return "day-sat";
        }
        return "day-regular";
    }

    private getDayNum(inputDate: any) {
        return inputDate.getDate();
    }

    public getDayObject(inputDate: any) {
        var className: string = this.getClassName(inputDate);
        var dayNum: string = this.getDayNum(inputDate);

        const dayObj = {
            class: className,
            day: dayNum,
            schedule: ``
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
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

        for (var i: number = 0; i < 6; i++) {
            var inputWeekObj = this.getWeekObject(firstDayOfMonth);
            weeksObj.push(inputWeekObj);
        }

        return weeksObj;
    }

}
