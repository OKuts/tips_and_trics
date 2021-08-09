// @ts-nocheck
/* eslint-disable node/no-unpublished-import */
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Nav } from '../Nav';
import { StoreProvider, rootStore } from '../../lib';

const init = () => {
    const { container } = render(
        <StoreProvider>
            <Router>
                <Nav />
            </Router>
        </StoreProvider>,
    );

    return { container };
};

describe('Nav:', () => {
    it('should have header element', () => {
        init();

        const heading = screen.getByRole('heading', { level: 1, name: /Типсы и Триксы/i });

        expect(heading).toBeInTheDocument();
    });

    it('should have 6 links', async () => {
        await init();

        const links = await screen.findAllByRole('link');

        expect(links).toHaveLength(6);
    });

    it('1 link should have path `/all-topics` in href', async () => {
        await init();

        const links = await screen.findAllByRole('link');

        expect(links[ 0 ].getAttribute('href')).toBe('/all-topics');
    });

    it('2 link should have path `/all-topics` in href', async () => {
        await init();

        const links = await screen.findAllByRole('link');

        expect(links[ 1 ].getAttribute('href')).toBe('/all-topics');
    });

    it('3 link should have path `/topics-by-tag` in href', async () => {
        await init();

        const links = await screen.findAllByRole('link');

        expect(links[ 2 ].getAttribute('href')).toBe('/topics-by-tag');
    });

    it('4 link should have path `/publish` in href', async () => {
        await init();

        const links = await screen.findAllByRole('link');

        expect(links[ 3 ].getAttribute('href')).toBe('/publish');
    });

    it('5 link should have an href attribute', async () => {
        await init();

        const links = await screen.findAllByRole('link');

        expect(links[ 4 ].getAttribute('href')).toBeNull();
    });

    it('6 link should have path `/login` in href', async () => {
        await init();

        const links = await screen.findAllByRole('link');

        expect(links[ 5 ].getAttribute('href')).toBe('/login');
    });

    it('6 link should have path `/logout` in href if token exists in store', async () => {
        rootStore.authStore.setToken('some-token-string');
        await init();

        const links = await screen.findAllByRole('link');

        expect(links[ 5 ].getAttribute('href')).toBe('/logout');
    });
});
