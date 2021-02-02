import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NewsService } from './news.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NewsSnippetComponent } from './news-snippet/news-snippet.component';
import { Article } from 'angular-news-api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NewsComponent', () => {
    let component: NewsComponent;
    let fixture: ComponentFixture<NewsComponent>;
    let newsServiceSpy;

    beforeEach(async(() => {
        newsServiceSpy = jasmine.createSpyObj('NewsService', ['topHeadlines']);

        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                MatFormFieldModule,
                MatInputModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [NewsComponent, NewsSnippetComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{provide: NewsService, useValue: newsServiceSpy}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should download and display articles', fakeAsync(() => {
        const articles = [{source: {}}] as Article[];
        const topHeadlinesSpy = newsServiceSpy.topHeadlines.and.returnValue(of(articles));
        expect(fixture.debugElement.queryAll(By.directive(NewsSnippetComponent)).length).toEqual(0);
        expect(topHeadlinesSpy).not.toHaveBeenCalled();

        fixture.detectChanges();

        expect(topHeadlinesSpy).toHaveBeenCalledTimes(1);
        expect(fixture.debugElement.queryAll(By.directive(NewsSnippetComponent)).length).toEqual(articles.length);
    }));

    it('should display no articles found no articles found', fakeAsync(() => {
        const topHeadlinesSpy = newsServiceSpy.topHeadlines.and.returnValue(of([]));

        fixture.detectChanges();

        expect(topHeadlinesSpy).toHaveBeenCalledTimes(1);
        expect(fixture.debugElement.queryAll(By.directive(NewsSnippetComponent)).length).toEqual(0);
        expect(fixture.nativeElement.querySelector('news-no-results-indication')).toBeDefined();
    }));

    it('should pass search input value as service parameter', fakeAsync(() => {
        const topHeadlinesSpy = newsServiceSpy.topHeadlines.and.returnValue(of([]));
        const searchValue = 'some value';
        component.searchControl.setValue(searchValue);

        fixture.detectChanges();

        expect(topHeadlinesSpy).toHaveBeenCalledWith(searchValue);
    }));

    it('should display no articles found on error', fakeAsync(() => {
        const topHeadlinesSpy = newsServiceSpy.topHeadlines.and.throwError();

        fixture.detectChanges();

        expect(topHeadlinesSpy).toHaveBeenCalledTimes(1);
        expect(fixture.debugElement.queryAll(By.directive(NewsSnippetComponent)).length).toEqual(0);
        expect(fixture.nativeElement.querySelector('news-no-results-indication')).toBeDefined();
    }));
});
