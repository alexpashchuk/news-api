export type InitSource = {
    id: string;
    name: string;
};

export type Article = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Pick<InitSource, 'id' | 'name'>;
    title: string;
    url: string;
    urlToImage: string;
};

export type Source = {
    category: string;
    country: string;
    description: string;
    id: string;
    name: string;
    url: string;
    language: string;
};

export interface NewsData {
    articles: Array<Article>;
    totalResults: number;
    status: string;
}

export interface SourceData {
    sources: Array<Source>;
    status: string;
}

export type AllData = Article | Source;

export type Options<T> = { [key: string]: T };

export type Callback<T> = (data?: T) => void;

export enum Links {
    local = 'https://newsapi.org/v2/',
    deploy = 'https://rss-news-api.onrender.com/',
}

export enum Api {
    key1 = 'b3095f32b45e4809b0761a77753ace53',
    key2 = 'ea66c5f005934e05a284826b3b050d0a',
}

export type IApiKey = string;
