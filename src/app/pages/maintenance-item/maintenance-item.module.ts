import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { maintenanceItemComponent } from './maintenance-item.component';

@NgModule({
	declarations: [maintenanceItemComponent],
	imports: [
		ButtonModule,
		CommonModule,
		FormsModule,
		InputNumberModule,
		InputTextModule,
		PanelModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{ path: '', component: maintenanceItemComponent },
		]),
		ToastModule,
	],
})
export class MaintenanceItemModule {}
