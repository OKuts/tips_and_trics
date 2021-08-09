/* Cores */
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/* Other */
import { fetchify, formatDate, getTagIcon } from '../../helpers';
import { useTipById } from '../../hooks';

export const TipView = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { data: tipToView, isFetchedAfterMount, isFetched } = useTipById(params.id);

    useEffect(() => {
        if (!tipToView && isFetchedAfterMount) {
            navigate('..', { replace: true });
        }
    }, [tipToView, isFetchedAfterMount]);

    const TagIcon = getTagIcon(tipToView?.tag.name);

    const goBack = () => {
        navigate('..');
    };

    return (
        <>
            <article>
                <header>
                    <TagIcon /> <h1>{ fetchify(isFetched, tipToView?.title) }</h1>
                </header>

                <main>
                    <time>
                        <TagIcon />
                        <div>
                            <span>🚀 { fetchify(isFetched, formatDate(tipToView?.created)) }</span>
                            <span>👨🏼‍🚀 Автор: { fetchify(isFetched, tipToView?.author) }</span>
                        </div>
                    </time>
                </main>
                <footer>
                    <a onClick = { goBack }>&larr;&nbsp;Назад</a>
                </footer>
            </article>

            <main>{ fetchify(isFetched, tipToView?.body) }</main>
        </>
    );
};
