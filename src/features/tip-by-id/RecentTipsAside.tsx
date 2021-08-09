/* Core */
import { FC } from 'react';
import { Link } from 'react-router-dom';

/* Other */
import {
    sortByDate, formatDate, getTagIcon, fetchify,
} from '../../helpers';
import { useTips } from '../../hooks';

export const RecentTipsAside: FC = () => {
    const { data: tips, isFetched } = useTips();

    const recentTipsJSX = tips
        ?.sort(sortByDate)
        .slice(0, 5)
        .map((tip) => {
            const RecentTipTagIcon = getTagIcon(tip.tag.name);

            return (
                <Link key = { tip.id } to = { `../${tip.id}` }>
                    <h3>{ tip.title }</h3>
                    <time>
                        <RecentTipTagIcon /> { formatDate(tip?.created) }
                    </time>
                </Link>
            );
        });

    return (
        <aside className = 'recent-tips'>
            <h1>Свежие типсы</h1>
            { fetchify(isFetched, recentTipsJSX) }
        </aside>
    );
};
