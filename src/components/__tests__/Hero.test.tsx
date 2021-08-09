// @ts-nocheck
/* eslint-disable node/no-unpublished-import */
import { render, screen } from '@testing-library/react';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import { Hero } from '../Hero';

const queryClient = new QueryClient();
const fakeData = [
    {
        id:   'f38bc0ad-5a09-40ad-b72d-96d04310bd36',
        name: 'React',
    },
];

const init = () => {
    const { container } = render(
        <QueryClientProvider client = { queryClient }>
            <Router>
                <Hero tipViewMode = 'all-topics' />
            </Router>
        </QueryClientProvider>,
    );

    return { container };
};

nock('https://lab.lectrum.io/rtx/api/tips-and-tricks')
    .get('/tags')
    .once()
    .reply(200, fakeData, { 'Access-Control-Allow-Origin': '*' });

describe('Hero:', () => {
    it('should have header element', () => {
        init();

        const heading = screen.getByRole('heading', { level: 1, name: /Типсы и Триксы/i });

        expect(heading).toBeInTheDocument();
    });

    it('should render tags', async () => {
        init();

        const tags = await screen.findAllByRole('listitem');

        expect(tags).toHaveLength(1);
    });

    it('should match snapshot', () => {
        const { container } = init();

        expect(container).toMatchSnapshot();
    });
});
