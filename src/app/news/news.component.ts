import { ChangeDetectionStrategy, Component, OnInit, TrackByFunction } from '@angular/core';
import { NewsService } from './news.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from 'angular-news-api';
import { catchError, debounceTime, distinctUntilChanged, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {

    private static readonly SEARCH_DEBOUNCE_TIME = 300;

    public articles$!: Observable<Article[]>;
    public loading$ = new BehaviorSubject(true);
    public searchControl = new FormControl('');
    public trackByArticleUrl: TrackByFunction<Article> = (index, article) => article.url;

    constructor(
        private newsService: NewsService,
    ) {
    }

    public ngOnInit() {
        const debouncedSearch$ = this.searchControl.valueChanges.pipe(
            debounceTime(NewsComponent.SEARCH_DEBOUNCE_TIME),
            distinctUntilChanged(),
            startWith(this.searchControl.value),
        );
        this.articles$ = debouncedSearch$.pipe(
            tap(() => this.loading$.next(true)),
            switchMap(search => this.fetchArticles(search)),
            tap(() => this.loading$.next(false)),
            catchError(error => {
                console.error('Fetching articles failed', error);
                return [];
            }),
            shareReplay(1),
        );
    }

    private fetchArticles(search: string): Observable<Article[]> {
        return this.newsService.topHeadlines(search);
    }

}
