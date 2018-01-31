import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-schedule-modal',
    templateUrl: './schedule-modal.component.html',
    styleUrls: ['./schedule-modal.component.scss']
})
export class ScheduleModalComponent implements OnInit {
    @Input() date;
    @Input() title;

    constructor(public activeModal: NgbActiveModal) { }
    btn() {
    }
    ngOnInit() {
    }

}
