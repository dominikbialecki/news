import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-ui-image',
    templateUrl: './ui-image.component.html',
    styleUrls: ['./ui-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiImageComponent implements OnChanges {

    static readonly PLACEHOLDER_IMAGE_SRC = 'assets/images/placeholder.jpg';

    @Input() imageUrl!: string;
    @Input() altText!: string;

    private displayPlaceholderImage = false;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.imageUrl) {
            this.displayPlaceholderImage = false;
        }
    }

    onImageLoadError(): void {
        this.displayPlaceholderImage = true;
    }

    getImage(): string {
        return this.displayPlaceholderImage ? UiImageComponent.PLACEHOLDER_IMAGE_SRC : this.imageUrl;
    }
}
