/* Core */
import { FC } from 'react';

/* Components */
import { Layout } from '../components';
import { PublishTipForm } from '../components/forms';

export const PublishPage: FC = () => {
    return (
        <Layout>
            <PublishTipForm />
        </Layout>
    );
};
