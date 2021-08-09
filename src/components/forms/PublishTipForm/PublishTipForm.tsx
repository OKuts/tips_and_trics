/* Core */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';

/* Other */
import { Input } from '../elements/Input';
import { getNewTipPlaceholder, schema } from './config';
import { useCreateTip, useTags } from '../../../hooks';
import { ITipModel } from '../../../types';

export const PublishTipForm = observer(() => {
    const { data: tags } = useTags();
    const createTip = useCreateTip();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const publish = form.handleSubmit(async (newTip: ITipModel) => {
        await createTip.mutateAsync(newTip);
        form.reset();
    });

    const tagOptions = tags?.map((tag) => {
        return {
            name:  tag.name,
            value: tag.id,
        };
    });

    useEffect(() => {
        const placeholder = getNewTipPlaceholder();

        form.setValue('title', placeholder.title);
        form.setValue('preview', placeholder.preview);
        form.setValue('body', placeholder.body);
        form.setValue('tagId', tags?.[ 0 ].id ?? '');
    }, [tags]);

    return (
        <section className = 'publish-tip'>
            <form onSubmit = { publish }>
                <fieldset disabled = { createTip.isLoading }>
                    <legend>Опубликовать Типс</legend>
                    <Input
                        label = 'Заголовок'
                        error = { form.formState.errors.title }
                        register = { form.register('title') } />
                    <Input
                        label = 'Превью'
                        error = { form.formState.errors.preview }
                        register = { form.register('preview') } />
                    <Input
                        label = 'Описание'
                        tag = 'textarea'
                        error = { form.formState.errors.body }
                        register = { form.register('body') } />
                    <Input
                        label = 'Тэг'
                        tag = 'select'
                        options = { tagOptions }
                        error = { form.formState.errors.tagId }
                        register = { form.register('tagId') } />

                    <input type = 'submit' value = 'Опубликовать' />
                </fieldset>
            </form>
        </section>
    );
});
