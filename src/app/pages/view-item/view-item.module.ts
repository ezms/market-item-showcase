import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { ComponentsModule } from 'src/app/components/components.module';
import { ViewItemComponent } from './view-item.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
	declarations: [ViewItemComponent],
	imports: [
		CommonModule,
		ComponentsModule,
		ToastModule,
		PanelModule,
		RouterModule.forChild([{ path: '', component: ViewItemComponent }]),
	],
})
export class ViewItemModule {}
