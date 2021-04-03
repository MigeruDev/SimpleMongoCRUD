import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { FlightInsertComponent } from '../../flight-insert/flight-insert.component';
import { FlightHistoryComponent,  DialogOverviewExampleDialog} from '../../flight-history/flight-history.component';
import { DevsComponent } from '../../devs/devs.component';
import { ExtraComponent } from '../../extra/extra.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  MatDialogModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule
  ],
  declarations: [
    FlightInsertComponent,
    FlightHistoryComponent,
    DevsComponent,
    ExtraComponent,
    DialogOverviewExampleDialog,
  ],
  entryComponents: [FlightHistoryComponent, DialogOverviewExampleDialog],
  bootstrap: [FlightHistoryComponent],
  providers: []
})

export class AdminLayoutModule {}
