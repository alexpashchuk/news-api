import AppLoader from './appLoader';
import { Callback, NewsData, SourceData } from '../app/types';

class AppController extends AppLoader {
    getSources(callback: Callback<SourceData>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getSearch(callback: Callback<NewsData>) {
        const searchInput = document.querySelector('.search__input') as HTMLInputElement;
        const keySearch = searchInput.value;
        super.getResp(
            {
                endpoint: 'everything',
            },
            callback,
            keySearch
        );
    }

    getNews(e: Event, callback: Callback<NewsData>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
