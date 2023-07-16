import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './components/about/about.module';
import { dbConfig } from './core/db/config';

@NgModule({
	declarations: [AppComponent],
	imports: [
		AboutModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		NgxIndexedDBModule.forRoot(dbConfig),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
