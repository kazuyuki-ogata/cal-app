import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ScheduleModalComponent } from './components/modal/schedule-modal/schedule-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbModule.forRoot(),
        NgbDropdownModule.forRoot()
    ],
    entryComponents: [ScheduleModalComponent],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ScheduleModalComponent]
})
export class LayoutModule {}
