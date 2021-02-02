import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { UiImageComponent } from './ui-image.component';

describe('UiImageComponent', () => {
    let component: UiImageComponent;
    let fixture: ComponentFixture<UiImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiImageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiImageComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set input value as source', fakeAsync(() => {
        const src = 'someValue';
        component.imageUrl = src;

        fixture.detectChanges();

        const image = fixture.nativeElement.querySelector('img');
        expect(image).toBeTruthy();
        expect(image.src).toContain(src);
    }));

    it('should set placeholder src when source load failed', fakeAsync(() => {
        component.imageUrl = 'someValue';

        fixture.detectChanges();

        const image = fixture.nativeElement.querySelector('img');
        image.dispatchEvent(new Event('error'));

        fixture.detectChanges();

        expect(image).toBeTruthy();
        expect(image.src).toContain(UiImageComponent.PLACEHOLDER_IMAGE_SRC);
    }));
});
