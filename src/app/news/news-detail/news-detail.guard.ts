import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Article } from 'angular-news-api';

@Injectable({providedIn: 'root'})
export class NewsDetailGuard implements CanActivate, Resolve<Article> {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const redirectUrl = route.data.redirectUrl;
        return !!this.getArticle() || this.router.parseUrl(redirectUrl);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article {
        return this.getArticle();
    }

    private getArticle(): Article {
        const navigation = this.router.getCurrentNavigation();
        return navigation && navigation.extras.state && navigation.extras.state.article;
    }
}
