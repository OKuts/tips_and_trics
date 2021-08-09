/* Core */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

/* Components */
import { Input } from '../elements';

/* Other */
import { ISignUpFormShape, signUpFormSchema } from './config';
import { useSignUp } from '../../../hooks';

export const SignUpForm = () => {
    const auth = useSignUp();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(signUpFormSchema),
    });

    const signUp = form.handleSubmit(async (credentials: ISignUpFormShape) => {
        await auth.mutateAsync(credentials);
        form.reset();
    });

    return (
        <section className = 'publish-tip'>
            <form onSubmit = { signUp }>
                <fieldset disabled = { auth.isLoading }>
                    <legend>Залогиниться</legend>
                    <Input
                        label = 'Имя и фамилия'
                        error = { form.formState.errors.name }
                        register = { form.register('name') } />

                    <Input
                        label = 'Электропочта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        label = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    <Input
                        label = 'Подтверждение пароля'
                        type = 'password'
                        error = { form.formState.errors.confirmPassword }
                        register = { form.register('confirmPassword') } />

                    <input type = 'submit' value = 'Зарегистрироваться' />
                </fieldset>
                <p>
          Перейти к <Link to = '/login'>логину</Link>.
                </p>
            </form>
        </section>
    );
};
