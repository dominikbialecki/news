import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-ui-card',
    templateUrl: './ui-card.component.html',
    styleUrls: ['./ui-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiCardComponent {
}
