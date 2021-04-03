import { Routes } from '@angular/router';

import { FlightInsertComponent } from '../../flight-insert/flight-insert.component';
import { FlightHistoryComponent } from '../../flight-history/flight-history.component';
import { DevsComponent } from '../../devs/devs.component';
import { ExtraComponent } from '../../extra/extra.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'flight-insert',   component: FlightInsertComponent },
    { path: 'flight-history',     component: FlightHistoryComponent },
    { path: 'devs',     component: DevsComponent },
    { path: 'extra',     component: ExtraComponent },
];
