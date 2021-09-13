import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() getArticles = new EventEmitter<string>();

  constructor(private articleService: ArticleService) { }

  isModalOpen$ = this.articleService.isModalOpen$;
  tempArticleSubscription = new Subscription();
  addSubscription = new Subscription();
  updateSubscription = new Subscription();

  form = new FormGroup({
    'title': new FormControl('', [Validators.required]),
    'tag': new FormControl('', [Validators.required]),
    'author': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'imgUrl': new FormControl('', [Validators.required]),
    'saying': new FormControl('', [Validators.required]),
    'content': new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.tempArticleSubscription = this.articleService.tempArticle$.subscribe((article: Article) => {
      this.form = new FormGroup({
        'title': new FormControl(article.title, [Validators.required]),
        'tag': new FormControl(article.tag, [Validators.required]),
        'author': new FormControl(article.author, [Validators.required]),
        'date': new FormControl(article.date, [Validators.required]),
        'imgUrl': new FormControl(article.imgUrl, [Validators.required]),
        'saying': new FormControl(article.saying, [Validators.required]),
        'content': new FormControl(article.content, [Validators.required])
      });
    })
  }

  initForm() {
  }

  closeModal() {
    this.isModalOpen$.next(false);
  }

  saveArticle() {
    // pass
  }

  ngOnDestroy() {
    this.tempArticleSubscription.unsubscribe();
    this.addSubscription.unsubscribe();
    this.updateSubscription.unsubscribe();
  }
}
