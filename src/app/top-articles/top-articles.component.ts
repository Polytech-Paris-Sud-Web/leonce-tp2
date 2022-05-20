import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/Article';

@Component({
	selector: 'app-top-articles',
	templateUrl: './top-articles.component.html',
	styleUrls: ['./top-articles.component.css'],
})
export class TopArticlesComponent implements OnInit {
	articles!: Article[];
	filteredArticles?: Article[];
	searchText?: string;

	constructor(private articleService: ArticleService) {}

	ngOnInit() {
		this.articleService.getTopArticles().subscribe(value => {
			this.articles = value;
			this.filteredArticles = value;
		});
	}

	delete(article: Article) {
		this.articleService.deleteArticle(article.id).subscribe(value => {
			this.articles = this.articles.filter(
				value => value.id !== article.id
			);
		});
	}

	searchKeyword(e: Event) {
		const keyword = (<HTMLInputElement>e.target).value;

		this.filteredArticles = this.articles.filter(
			value =>
				value.title.includes(keyword) ||
				value.content.includes(keyword) ||
				value.author.includes(keyword)
		);
	}
}
