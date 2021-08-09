import { Hero, Layout, TipList } from '../components';

export const AllTopicsPage = () => {
    return (
        <>
            <Layout>
                <Hero tipViewMode = 'all-topics' />
                <TipList tipViewMode = 'all-topics' />
            </Layout>
        </>
    );
};
