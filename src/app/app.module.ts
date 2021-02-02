import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { NgnewsModule } from 'angular-news-api';
import { NewsSnippetComponent } from './news/news-snippet/news-snippet.component';
import { UiImageModule } from './ui/ui-image/ui-image.module';
import { UiCardModule } from './ui/ui-card/ui-card.module';
import { MatDividerModule } from '@angular/material';

const newsApiKey = '67c3de34849a45c181cc0ca6f54cc60f';

@NgModule({
    declarations: [
        AppComponent,
        NewsDetailComponent,
        NewsComponent,
        NewsSnippetComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgnewsModule.forRoot({key: newsApiKey}),
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        ReactiveFormsModule,
        UiImageModule,
        UiCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
