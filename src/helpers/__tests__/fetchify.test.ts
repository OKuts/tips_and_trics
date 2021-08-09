// @ts-nocheck
/* eslint-disable node/no-unpublished-import */
// Other
import { fetchify } from '../fetchify';

describe('fetchify', () => {
    it('should return right string if no content and isFetched is equal to false', () => {
        const result = fetchify();

        expect(result).toEqual('Загрузка...');
    });

    it('should return null if no content and isFetched is equal to true', () => {
        const result = fetchify(true);

        expect(result).toBeNull();
    });

    it('should return content if content specified and isFetched is equal to false', () => {
        const content = { name: 'John' };
        const result = fetchify(false, content);

        expect(result).toEqual(content);
    });
});
