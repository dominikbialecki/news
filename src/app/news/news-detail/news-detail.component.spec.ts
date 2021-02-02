import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailComponent } from './news-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { UiImageModule } from '../../ui/ui-image/ui-image.module';
import { UiCardModule } from '../../ui/ui-card/ui-card.module';
import { MatDividerModule } from '@angular/material';
import { of } from 'rxjs';

describe('NewsDetailComponent', () => {
    let component: NewsDetailComponent;
    let fixture: ComponentFixture<NewsDetailComponent>;
    let article;

    beforeEach(async(() => {
        article = {title: 'someTitle', url: 'someUrl', source: {}};
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                UiImageModule,
                UiCardModule,
                MatDividerModule
            ],
            declarations: [NewsDetailComponent],
            providers: [{provide: ActivatedRoute, useValue: {data: of({article})}}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display article title', () => {
        const title = fixture.nativeElement.querySelector('.news-detail-card-title');
        expect(title.textContent).toContain(article.title);
        expect(title.href).toContain(article.url);
    });

    it('should display comments', () => {
        const comments = fixture.nativeElement.querySelectorAll('.comment');
        expect(comments.length).toEqual(3);
    });
});
