export interface Article {
    title: string;
    content: string;
    author: string;
    id: number;
    date: Date;
}

export type ArticleCreation = Omit<Article, "id" | "date">;