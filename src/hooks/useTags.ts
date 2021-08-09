/* Core */
import { useQuery } from 'react-query';

/* Other */
import { api } from '../api/api';
import { ITagModel } from '../types';

export const useTags = () => {
    const query = useQuery<ITagModel[]>('tags', api.getTags);

    return query;
};
