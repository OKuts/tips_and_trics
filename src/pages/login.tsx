/* Core */
import { FC } from 'react';

/* Components */
import { Layout } from '../components';
import { LoginForm } from '../components/forms';

export const LoginPage: FC = () => {
    return (
        <Layout>
            <section className = 'login'>
                <LoginForm />
            </section>
        </Layout>
    );
};
