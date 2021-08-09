// @ts-nocheck
/* eslint-disable node/no-unpublished-import */
// Core
import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';

// Other
import { useTipById } from '../useTipById';

const fakeData = {
    author:  'Лектрум',
    body:    'Unde quis voluptatem laboriosam et.',
    created: '2021-03-27T16:38:40.011Z',
    id:      'fd765bc7-4365-4ffb-aa02-e4cf5c148f4c',
    preview: 'Не var а const и let',
    tag:     { id: '5184d0d1-5e4d-4437-9967-8085807fc995', name: 'JavaScript' },
    title:   'Пользуйся правильными переменными',
};

nock('https://lab.lectrum.io/rtx/api/tips-and-tricks')
    .get(`/tips/${fakeData.id}`)
    .once()
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('useTipById hook', () => {
    let wrapper = null;

    beforeAll(() => {
        const queryClient = new QueryClient();
        // eslint-disable-next-line react/display-name
        wrapper = ({ children }) => (
            <QueryClientProvider client = { queryClient }>{ children }</QueryClientProvider>
        );
    });

    it('should return object with one tip', async () => {
        const { result, waitFor } = renderHook(() => useTipById(fakeData.id), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(result.current.data).toEqual(fakeData);
    });

    it('returned tip should be object', async () => {
        const { result, waitFor } = renderHook(() => useTipById(fakeData.id), { wrapper });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(Array.isArray(result.current.data)).toBeFalsy();
    });
});
