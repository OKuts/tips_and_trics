import { ReactElement } from 'react';

export const fetchify = (isFetched: boolean, content: Content) => {
    if (!isFetched && !content) {
        return 'Загрузка...';
    }

    if (content) {
        return content;
    }

    return null;
};

type Content = ReactElement[] | string | null | undefined;
