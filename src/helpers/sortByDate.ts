// Хелпер функция для сортировки дат.
import { ITipModel } from '../types';

export const sortByDate = (a: ITipModel, b: ITipModel): number => {
    const result = new Date(b.created).getTime() - new Date(a.created).getTime();

    return result;
};
