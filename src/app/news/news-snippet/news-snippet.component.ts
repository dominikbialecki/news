import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from 'angular-news-api';

@Component({
    selector: 'app-news-snippet',
    templateUrl: './news-snippet.component.html',
    styleUrls: ['./news-snippet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSnippetComponent {
    @Input() article!: Article;
    @Input() navigationLink!: string;
}
