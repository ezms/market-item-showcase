import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
	public display: boolean = false;

	constructor() {}

	public open(): void {
		console.log('null :>> ', null);
		this.display = true;
	}

	public close() {
		this.display = false;
	}
}
