import { NgModule } from '@angular/core';
import { CatalogRepositoryService } from './catalog-repository.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [ CatalogComponent ],
  exports: [ ],
  providers: [ CatalogRepositoryService ]
})
export class CatalogModule { };
