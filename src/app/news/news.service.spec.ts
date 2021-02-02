import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import { Article, NewsApiService } from 'angular-news-api';
import { of } from 'rxjs';

describe('NewsService', () => {

    let newsApiServiceSpy;


    beforeEach(() => {
        newsApiServiceSpy = jasmine.createSpyObj('NewsApiService', ['topHeadlines']);
        return TestBed.configureTestingModule({
            providers: [{provide: NewsApiService, useValue: newsApiServiceSpy}]
        });
    });

    it('should be created', () => {
        const service: NewsService = TestBed.get(NewsService);
        expect(service).toBeTruthy();
    });

    it('should return articles', done => {
        const service: NewsService = TestBed.get(NewsService);
        const search = 'searchValue';
        const articles = [{source: {}}] as Article[];
        const topHeadlinesSpy = newsApiServiceSpy.topHeadlines.and.returnValue(of({articles}));

        const response = service.topHeadlines(search);

        expect(topHeadlinesSpy).toHaveBeenCalledTimes(1);
        expect(topHeadlinesSpy).toHaveBeenCalledWith(jasmine.objectContaining({q: search}));
        response.subscribe(resp => {
            expect(resp).toEqual(articles);
            done();
        });
    });
});
