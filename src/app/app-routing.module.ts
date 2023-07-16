import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'view-item',
		loadChildren: () =>
			import('./pages/view-item/view-item.module').then(
				({ ViewItemModule }) => ViewItemModule,
			),
	},
	{
		path: 'add-item',
		loadChildren: () =>
			import('./pages/maintenance-item/maintenance-item.module').then(
				({ MaintenanceItemModule }) => MaintenanceItemModule,
			),
	},
	{
		path: 'add-item/:id',
		loadChildren: () =>
			import('./pages/maintenance-item/maintenance-item.module').then(
				({ MaintenanceItemModule }) => MaintenanceItemModule,
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
