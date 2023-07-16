import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/interfaces/product';

@Component({
	selector: 'app-view-item',
	templateUrl: './view-item.component.html',
	styleUrls: ['./view-item.component.scss'],
	providers: [MessageService],
})
export class ViewItemComponent implements OnInit {
	public products: Array<Product> = [];

	constructor(
		private dbService: NgxIndexedDBService,
		private messageService: MessageService,
	) {}

	ngOnInit(): void {
		this.loadData();
	}

	private loadData(): void {
		this.dbService.getAll('products').subscribe((results) => {
			this.products = results as Array<Product>;
		});
	}

	public onDelete($event: Array<Product>) {
		this.products = $event;
		this.messageService.add({
			severity: 'success',
			summary: 'System',
			detail: 'Successfully deleted item.',
		});
	}
}
