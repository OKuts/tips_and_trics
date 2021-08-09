/* Components */
import { FC } from 'react';

/* Other */
import { observer } from 'mobx-react-lite';
import { TipViewMode } from '../types';
import { Tags } from './Tags';
import { useStore } from '../hooks';

export const Hero: FC<IPropTypes> = observer(({ tipViewMode }) => {
    const { tagStore } = useStore();
    const { tagName } = tagStore;
    const subTitle = tipViewMode === 'all-topics' ? 'Все темы' : tagName;

    return (
        <section className = 'hero'>
            <div className = 'title'>
                <h1>Типсы и Триксы</h1>
                <h2>{ subTitle }</h2>
            </div>
            <Tags tipViewMode = { tipViewMode } />
        </section>
    );
});

interface IPropTypes {
    tipViewMode: TipViewMode;
}
