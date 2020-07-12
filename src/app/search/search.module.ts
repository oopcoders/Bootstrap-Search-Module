import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { WidgetSearchBarComponent } from './widget-search-bar/widget-search-bar.component';
import { WidgetSearchBarButtonComponent } from './widget-search-bar-button/widget-search-bar-button.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';

@NgModule({
  declarations: [
    WidgetSearchBarComponent,
    WidgetSearchBarButtonComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
  ],
  imports: [CommonModule, SearchRoutingModule, HttpClientModule, FormsModule],
  exports: [WidgetSearchBarComponent, WidgetSearchBarButtonComponent],
})
export class SearchModule {}
