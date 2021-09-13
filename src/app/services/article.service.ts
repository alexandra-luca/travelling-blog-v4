import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private http: HttpClient) { }

    articleUrl = 'http://localhost:4000/articles';

    isModalOpen$ = new BehaviorSubject(false);
    tempArticle$ = new Subject<Article>();

    getArticles() {
        return this.http.get<Article[]>(this.articleUrl) as Observable<Article[]>;
    }

    addArticle(article: Article) {
        return this.http.post<Article>(this.articleUrl, article) as Observable<Article>;
    }

    getArticle(id: string) {
        return this.http.get<Article>(`${this.articleUrl}/${id}`) as Observable<Article>;
    }
}
