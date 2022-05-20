import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/Article';
import { Router } from '@angular/router';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
	@Input()
	article: Article | undefined;

	@Output()
	deletedArticle: EventEmitter<Article> = new EventEmitter();

	constructor(private route: Router) {}

	delete() {
		this.deletedArticle.emit(this.article);
	}

	showAuthorName() {
		this.route.navigate(['/author', this.article?.author]);
	}

	openDetails() {
		this.route.navigate(['/article', this.article?.id]);
	}
}
