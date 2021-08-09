/* Components */
import { Hero, Layout, TipList } from '../components';

export const TopicsByTagPage = () => {
    return (
        <>
            <Layout>
                <Hero tipViewMode = 'topic-by-tag' />
                <TipList tipViewMode = 'topic-by-tag' />
            </Layout>
        </>
    );
};
