// @ts-nocheck
/* eslint-disable node/no-unpublished-import */
// Core
import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';

// Other
import { useTags } from '../useTags';

const fakeData = [
    {
        id:   'f38bc0ad-5a09-40ad-b72d-96d04310bd36',
        name: 'React',
    },
];

nock('https://lab.lectrum.io/rtx/api/tips-and-tricks')
    .get('/tags')
    .once()
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('useTags hook', () => {
    let wrapper = null;

    beforeAll(() => {
        const queryClient = new QueryClient();
        // eslint-disable-next-line react/display-name
        wrapper = ({ children }) => (
            <QueryClientProvider client = { queryClient }>{ children }</QueryClientProvider>
        );
    });

    it('should return array with tags', async () => {
        const { result, waitFor } = renderHook(() => useTags(), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(result.current.data).toEqual(fakeData);
    });

    it('returned tags should be array', async () => {
        const { result, waitFor } = renderHook(() => useTags(), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(Array.isArray(result.current.data)).toBeTruthy();
    });
});
