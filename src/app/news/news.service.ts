import { Injectable } from '@angular/core';
import { Article, NewsApiService } from 'angular-news-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private readonly country = 'us';

    constructor(
        private newsApiService: NewsApiService
    ) {
    }

    topHeadlines(search: string): Observable<Article[]> {
        return this.newsApiService.topHeadlines({
            country: this.country,
            q: search,
        }).pipe(
            map(response => response.articles)
        );
    }
}
