/* Core */
import { FC } from 'react';

/* Components */
import { Layout } from '../components';
import { RecentTipsAside, TipView, TagsAside } from '../features/tip-by-id';

export const TipByIdPage: FC = () => {
    return (
        <>
            <Layout>
                <section className = 'tip-view-layout'>
                    <TipView />

                    <section className = 'asides'>
                        <RecentTipsAside />
                        <TagsAside />
                    </section>
                </section>
            </Layout>
        </>
    );
};
