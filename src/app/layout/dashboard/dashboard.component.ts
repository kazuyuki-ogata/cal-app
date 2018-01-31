import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';

import { ScheduleModalComponent } from '../components/modal/schedule-modal/schedule-modal.component';

import { CalendarService } from '../../calendar.service';
import { Schedule } from '../../schedule';

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

    constructor(private calendarService: CalendarService, private modalService: NgbModal) {

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

    onSelect(schedule: Schedule): void {
        //this.calendarService.setSelectedSchedule(schedule);
        const modalRef = this.modalService.open(ScheduleModalComponent);
        var dateStr = schedule.getDateStr();
        modalRef.componentInstance.date = dateStr.substr(0, 4) + '年' + Number(dateStr.substr(4, 2)) + '月' + Number(dateStr.substr(6, 2)) + '日';
        modalRef.componentInstance.title = schedule.getTitle();
        modalRef.result.then(
            result => {
                console.log(result);
            }
        );
    }
}
