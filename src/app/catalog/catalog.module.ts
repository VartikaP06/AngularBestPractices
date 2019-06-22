import { NgModule } from '@angular/core';
import { CatalogRepositoryService } from './catalog-repository.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { CatalogComponent } from './catalog.component';
import { FilterClassesService } from './filter-classes.service';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [ CatalogComponent ],
  exports: [ ],
  providers: [
    CatalogRepositoryService,
    FilterClassesService
   ]
})
export class CatalogModule { };
