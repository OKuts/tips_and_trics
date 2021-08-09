/* Nav */
import { FC } from 'react';
import { Nav } from './Nav';
import { LayoutWrapper } from './styles/Layout.styles';

export const Layout: FC = ({ children }) => {
    return (
        <LayoutWrapper>
            <Nav />
            { children }
        </LayoutWrapper>
    );
};
