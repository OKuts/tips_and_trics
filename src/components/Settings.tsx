/* Core */
import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

/* Other */
import { useStore } from '../hooks';

export const Settings: FC = observer(() => {
    const { settingsStore } = useStore();
    const { isSettingsOpen, toggleSettingsIsOpen } = settingsStore;

    useEffect(() => {
        const closeSettingsOnEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                toggleSettingsIsOpen(false);
            }
        };

        window.addEventListener('keydown', closeSettingsOnEsc);

        return () => {
            window.removeEventListener('keydown', closeSettingsOnEsc);
        };
    }, []);

    return (
        <section className = { `settings ${isSettingsOpen ? 'open' : 'closed'}` }>
            <header>
                <h1>Настройки</h1>
            </header>

            <footer>
                <button onClick = { () => toggleSettingsIsOpen(false) }>Закрыть</button>
            </footer>
        </section>
    );
});
