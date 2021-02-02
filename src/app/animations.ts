import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const slide = (direction: 'left' | 'right') => [
    style({position: 'relative'}),
    query(':enter, :leave', [
        style({
            position: 'absolute',
            top: 0,
            [direction]: 0,
            width: '100%'
        })
    ]),
    query(':enter', [
        style({[direction]: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
        query(':leave', [
            animate('300ms ease-out', style({[direction]: '100%'}))
        ]),
        query(':enter', [
            animate('300ms ease-in', style({[direction]: '0%'}))
        ])
    ]),
    query(':enter', animateChild()),
];

export const slideInAnimation = trigger('routeAnimations', [
    transition('NewsDetailComponent => NewsComponent', slide('left')),
    transition('NewsComponent => NewsDetailComponent', slide('right')),
]);
