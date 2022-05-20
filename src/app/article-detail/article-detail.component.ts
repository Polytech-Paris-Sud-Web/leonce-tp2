import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../models/Article';

@Component({
	selector: 'app-article-detail',
	templateUrl: './article-detail.component.html',
	styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent {
	@Input()
	article: Article | undefined;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private articleService: ArticleService
	) {
		const id = parseInt(this.route.snapshot.paramMap.get('id') || 'NaN');

		if (id) {
			this.articleService.getArticle(id).subscribe(value => {
				this.article = value;
			});
		} else {
			this.router.navigate(['/articles']);
		}
	}

	delete(article: Article) {
		this.articleService.deleteArticle(article.id).subscribe(_value => {
			this.router.navigate(['/articles']);
		});
	}
}
