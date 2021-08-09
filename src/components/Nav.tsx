/* Core */
import { SyntheticEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

/* Other */
import { icons } from '../theme/icons/nav';
import { useStore } from '../hooks';
import { NavWrapper } from './styles/Nav.styles';

export const Nav = observer(() => {
    const { settingsStore, authStore } = useStore();
    const { token } = authStore;
    const { isSettingsOpen, toggleSettingsIsOpen } = settingsStore;

    const handleSettingsClick = (event: SyntheticEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        toggleSettingsIsOpen(true);
    };

    return (
        <NavWrapper>
            <Link to = '/all-topics'>
                <h1 title = 'Типсы и Триксы'>T и T</h1>
            </Link>
            <NavLink to = '/all-topics'>
                <icons.Home /> Все темы
            </NavLink>
            <NavLink to = '/topics-by-tag'>
                <icons.Tag /> По тэгам
            </NavLink>
            <NavLink to = '/publish'>
                <icons.Publish />
        Опубликовать
            </NavLink>
            <a
                className = { isSettingsOpen ? 'active' : '' } onClick = { handleSettingsClick }
                role = 'link'>
                <icons.Settings />
        Настройки
            </a>
            { !token && (
                <NavLink to = '/login'>
                    <icons.Bolt />
          Войти
                </NavLink>
            ) }
            { token && (
                <NavLink to = '/logout'>
                    <icons.Logout />
          Выйти
                </NavLink>
            ) }
        </NavWrapper>
    );
});
