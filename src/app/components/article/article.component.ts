import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article = new Article();
  
  @Output() getArticles = new EventEmitter<string>();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  editArticle() {
    this.articleService.isModalOpen$.next(true);
    this.articleService.tempArticle$.next(this.article);
  }
}
