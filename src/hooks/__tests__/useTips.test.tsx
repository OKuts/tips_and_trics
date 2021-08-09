// @ts-nocheck
/* eslint-disable node/no-unpublished-import */
// Core
import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';

// Other
import { useTips } from '../useTips';

const fakeData = [
    {
        author:  'Лектрум',
        body:    'Unde quis voluptatem laboriosam et.',
        created: '2021-03-27T16:38:40.011Z',
        id:      'fd765bc7-4365-4ffb-aa02-e4cf5c148f4c',
        preview: 'Не var а const и let',
        tag:     { id: '5184d0d1-5e4d-4437-9967-8085807fc995', name: 'JavaScript' },
        title:   'Пользуйся правильными переменными',
    },
];

nock('https://lab.lectrum.io/rtx/api/tips-and-tricks')
    .get('/tips')
    .once()
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('useTips hook', () => {
    let wrapper = null;

    beforeAll(() => {
        const queryClient = new QueryClient();
        // eslint-disable-next-line react/display-name
        wrapper = ({ children }) => (
            <QueryClientProvider client = { queryClient }>{ children }</QueryClientProvider>
        );
    });

    it('should return array with tips', async () => {
        const { result, waitFor } = renderHook(() => useTips(), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(result.current.data).toEqual(fakeData);
    });

    it('returned tips should be array', async () => {
        const { result, waitFor } = renderHook(() => useTips(), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(Array.isArray(result.current.data)).toBeTruthy();
    });
});
