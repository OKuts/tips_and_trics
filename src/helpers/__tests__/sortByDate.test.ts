// @ts-nocheck
/* eslint-disable node/no-unpublished-import */
// Other
import { sortByDate } from '../sortByDate';

describe('sortByDate', () => {
    it('should return number grater than 0 if \'a\' date grater than \'b\' date', () => {
        const result = sortByDate({ created: '2021-06-25T12:00:00Z' }, { created: '2021-06-26T12:00:00Z' });

        expect(result).toBeGreaterThan(0);
    });

    it('should return number less than 0 if \'a\' date grater than \'b\' date', () => {
        const result = sortByDate({ created: '2021-06-26T12:00:00Z' }, { created: '2021-06-25T12:00:00Z' });

        expect(result).toBeLessThan(0);
    });

    it('should return number equal to 0 if \'a\' date equal to \'b\' date', () => {
        const result = sortByDate({ created: '2021-06-25T12:00:00Z' }, { created: '2021-06-25T12:00:00Z' });

        expect(result).toBe(0);
    });

    it('should sort by date in desc order', () => {
        const arr = [{ created: '2021-06-26T12:00:00Z' }, { created: '2021-06-23T12:00:00Z' }, { created: '2021-06-25T12:00:00Z' }];
        const sortedArr = [...arr].sort(sortByDate);

        expect(sortedArr[ 1 ]).toEqual(arr[ 2 ]);
    });
});
