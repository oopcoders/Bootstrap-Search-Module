import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {
  constructor(public searchService: SearchService) {}

  ngOnInit(): void {}
}
