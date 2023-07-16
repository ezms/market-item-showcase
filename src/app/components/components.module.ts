import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewComponent } from './view/view.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@NgModule({
	declarations: [ViewComponent],
	imports: [ButtonModule, CommonModule, RouterModule, ToastModule],
	exports: [ViewComponent],
})
export class ComponentsModule {}
