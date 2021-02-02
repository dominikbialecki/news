import { NewsDetailComment } from './news-detail-comment';

export const COMMENTS: NewsDetailComment[] = [
    {
        name: 'Chris Nat',
        date: new Date(),
        avatar: '/assets/images/1.jpg',
        comment: `Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    },
    {
        name: 'Matt Damon',
        date: new Date(),
        avatar: '/assets/images/2.jpg',
        comment: `Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. `,
    },
    {
        name: 'Seb Willhelm',
        date: new Date(),
        avatar: '/assets/images/3.jpg',
        comment: `Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.`,
    },
];
