/* Core */
import { useQuery } from 'react-query';

/* Other */
import { api } from '../api';
import { ITipModel } from '../types';

export const useTips = () => {
    const result = useQuery<ITipModel[]>('tips', api.getTips);

    return result;
};
