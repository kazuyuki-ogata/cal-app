import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { CalendarService } from '../../calendar.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public weeks: Array<any> = [];
    public now: string;

    constructor(private calendarService: CalendarService) {

        this.sliders.push(
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `新着メッセージはありません。`
            },
        );
    }

    ngOnInit() {
        this.calendarService.setCurrentDate(new Date());
        this.now = this.calendarService.getDispLabel();
        this.weeks = this.calendarService.getWeeksObject(new Date());
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
