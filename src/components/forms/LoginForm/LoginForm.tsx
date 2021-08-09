/* Core */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

/* Components */
import { Input } from '../elements';

/* Other */
import { ILoginFormShape, loginSchema } from './config';
import { useLogin } from '../../../hooks';

export const LoginForm = () => {
    const auth = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(loginSchema),
    });

    const login = form.handleSubmit(async (credentials: ILoginFormShape) => {
        await auth.mutateAsync(credentials);
        form.reset();
    });

    return (
        <section className = 'publish-tip'>
            <form onSubmit = { login }>
                <fieldset disabled = { auth.isLoading }>
                    <legend>Залогиниться</legend>
                    <Input
                        label = 'Электропочта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        label = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />

                    <input type = 'submit' value = 'Войти' />
                </fieldset>
                <p>
          Если у вас до сих пор нет учётной записи, вы можете{ ' ' }
                    <Link to = '/signup'>зарегистрироваться</Link>.
                </p>
            </form>
        </section>
    );
};
