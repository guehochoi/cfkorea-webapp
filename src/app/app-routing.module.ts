import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent},
	{ path: 'product', component: ProductComponent},
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'import_export', component: ImportExportComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'service', component: ServicesComponent},
	{ path: 'contact', component: ContactComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [
  	RouterModule
  ]
})

export class AppRoutingModule { }

