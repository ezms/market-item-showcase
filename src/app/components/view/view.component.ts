import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Key, NgxIndexedDBService } from 'ngx-indexed-db';
import { Product } from 'src/app/interfaces/product';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
	@Input() public product!: Product;
	@Output() public reloadEvent: EventEmitter<Array<Product>> =
		new EventEmitter();

	constructor(private dbService: NgxIndexedDBService) {}

	public delete(): void {
		const key: Key = this.product.id as Key;
		this.dbService.delete('products', key).subscribe((list) => {
			this.reloadEvent.emit(list as Array<Product>);
		});
	}
}
