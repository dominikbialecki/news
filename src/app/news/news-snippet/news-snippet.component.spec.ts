import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSnippetComponent } from './news-snippet.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UiImageModule } from '../../ui/ui-image/ui-image.module';
import { UiCardModule } from '../../ui/ui-card/ui-card.module';
import { Article } from 'angular-news-api';

describe('NewsSnippetComponent', () => {
    let component: NewsSnippetComponent;
    let fixture: ComponentFixture<NewsSnippetComponent>;
    const article = {source: {}} as Article;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
                UiImageModule,
                UiCardModule,
            ],
            declarations: [NewsSnippetComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsSnippetComponent);
        component = fixture.componentInstance;
        component.article = article;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
