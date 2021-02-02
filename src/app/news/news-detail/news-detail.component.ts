import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Article } from 'angular-news-api';
import { map } from 'rxjs/operators';
import { COMMENTS } from './comments-mock';
import { NewsDetailComment } from './news-detail-comment';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
    public article$!: Observable<Article>;

    public comments: NewsDetailComment[] = COMMENTS;

    constructor(
        public activatedRoute: ActivatedRoute,
    ) {
    }

    public ngOnInit() {
        this.article$ = this.activatedRoute.data.pipe(
            map(data => data.article)
        );
    }
}
