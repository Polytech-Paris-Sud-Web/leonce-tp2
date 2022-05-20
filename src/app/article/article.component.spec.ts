import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ArticleComponent } from './article.component';
import { Article } from './../models/Article';

const defaultArticle: Article = {
	id: 1,
	title: 'Test title',
	content: 'Test content',
	date: new Date(),
	author: 'Test',
};

describe('ArticleComponent', () => {
	let component: ArticleComponent;
	let fixture: ComponentFixture<ArticleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [ArticleComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ArticleComponent);
		component = fixture.componentInstance;
		component.article = defaultArticle;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
