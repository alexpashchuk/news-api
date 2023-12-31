import News from './news/news';
import Sources from './sources/sources';
import { NewsData, SourceData } from '../app/types';

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Partial<SourceData> | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
