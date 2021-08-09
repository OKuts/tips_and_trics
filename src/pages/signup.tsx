/* Core */
import { FC } from 'react';

/* Components */
import { Layout } from '../components';
import { SignUpForm } from '../components/forms';

export const SignUpPage: FC = () => {
    return (
        <Layout>
            <section className = 'signup'>
                <SignUpForm />
            </section>
        </Layout>
    );
};
