import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AboutComponent } from './about.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [AboutComponent],
	imports: [ButtonModule, CommonModule, DialogModule],
	exports: [AboutComponent],
})
export class AboutModule {}
