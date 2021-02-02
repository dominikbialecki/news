import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailGuard } from './news/news-detail/news-detail.guard';


const routes: Routes = [
    {path: '', redirectTo: '/news', pathMatch: 'full'},
    {path: 'news', component: NewsComponent, data: {animation: 'NewsComponent'}},
    {
        path: 'article',
        component: NewsDetailComponent,
        canActivate: [NewsDetailGuard],
        resolve: {article: NewsDetailGuard},
        data: {animation: 'NewsDetailComponent', redirectUrl: 'news'}
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
