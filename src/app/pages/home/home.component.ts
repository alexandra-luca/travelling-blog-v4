import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayArticles: Article[] = [];

  allArticles: Article[] = [];
  allArticlesLength: number = 0;
  articleSubscription: Subscription;

  startIndex: number = 0;

  isModalOpen$ = this.articleService.isModalOpen$;

  constructor(private articleService: ArticleService) { 
    this.articleSubscription = articleService.getArticles().subscribe((response) => {
      this.allArticles = response;
      this.allArticlesLength = response.length;

      this.displayArticles = this.allArticles.slice(this.startIndex, this.startIndex+3);
    });

    console.log(this.isModalOpen$);
  }

  ngOnInit(): void {
  }

  setStartDisplayIndex(newIndex: number): void {
    this.startIndex = newIndex;
    this.displayArticles = this.allArticles.slice(this.startIndex, this.startIndex+3);
  }

  openModal() {
    this.isModalOpen$.next(true);
    this.articleService.tempArticle$.next(new Article());
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
}
