import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Key, NgxIndexedDBService } from 'ngx-indexed-db';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/interfaces/product';

@Component({
	selector: 'app-maintenance-item',
	templateUrl: './maintenance-item.component.html',
	styleUrls: ['./maintenance-item.component.scss'],
	providers: [MessageService],
})
export class maintenanceItemComponent implements OnInit {
	public form: FormGroup;
	public isValid: boolean = true;
	public isEditing: boolean = false;

	public editingProduct?: Product;

	public get name(): AbstractControl | null {
		return this.form.get('name');
	}

	public get price(): AbstractControl | null {
		return this.form.get('price');
	}

	constructor(
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private dbService: NgxIndexedDBService,
		private messageService: MessageService,
	) {
		this.form = this.createForm();
	}

	ngOnInit(): void {
		this.checkRoute();
	}

	private checkRoute(): void {
		this.route.params.subscribe((param) => {
			if (Object.keys(param).length === 0) return;
			const key: Key = parseInt(param['id']);
			this.dbService.getByKey('products', key).subscribe((value) => {
				this.editingProduct = value as Product;
				if (this.editingProduct) {
					this.isEditing = true;
					this.form.patchValue(this.editingProduct);
				}
			});
		});
	}

	private createForm(): FormGroup {
		return this.formBuilder.group({
			name: ['', Validators.required],
			price: [null, Validators.required],
		});
	}

	public clearForm(): void {
		this.form.reset();
	}

	public onSubmit(): void {
		if (!this.name?.value || !this.price?.value) {
			this.isValid = false;
			return;
		}

		this.isValid = true;
		if (this.isEditing) {
			this.update();
			this.form.reset();
			return;
		}

		this.add();
		this.form.reset();
	}

	private add(): void {
		this.dbService.add('products', this.form.value).subscribe((_) => {
			this.messageService.add({
				severity: 'success',
				summary: 'System',
				detail: 'Successfully added item.',
			});
		});
	}

	private update() {
		const data = {
			id: this.editingProduct?.id,
			name: this.name?.value,
			price: this.price?.value,
		};

		this.dbService.update('products', data).subscribe((_) => {
			this.messageService.add({
				severity: 'success',
				summary: 'System',
				detail: 'Successfully updated item.',
			});
		});
	}
}
