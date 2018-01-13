import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

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

    constructor() {
        this.sliders.push(
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `新着メッセージはありません。`
            },
        );
        this.weeks.push(
            {
                day1: ``,
                day2: ``,
                day3: ``,
                day4: ``,
                day5: ``,
                day6: `1`,
                day7: `2`,
            },
            {
                day1: `3`,
                day2: `4`,
                day3: `5`,
                day4: `6`,
                day5: `7`,
                day6: `8`,
                day7: `9`,
            },
            {
                day1: `10`,
                day2: `11`,
                day3: `12`,
                day4: `13`,
                day5: `14`,
                day6: `15`,
                day7: `16`,
            },
            {
                day1: `17`,
                day2: `18`,
                day3: `19`,
                day4: `20`,
                day5: `21`,
                day6: `22`,
                day7: `23`,
            },
            {
                day1: `24`,
                day2: `25`,
                day3: `26`,
                day4: `27`,
                day5: `28`,
                day6: `29`,
                day7: `30`,
            },
            {
                day1: `31`,
                day2: ``,
                day3: ``,
                day4: ``,
                day5: ``,
                day6: ``,
                day7: ``,
            },
        );
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
