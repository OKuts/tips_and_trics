/* Core */
import { useMutation, useQueryClient } from 'react-query';

/* Other */
import { api } from '../api';
import { ITipModel } from '../types';
import { useStore } from './useStore';

export const useCreateTip = () => {
    const { authStore } = useStore();
    const { token } = authStore;
    const client = useQueryClient();

    const mutation = useMutation(
        (tip: ITipModel) => {
            return api.createTip(tip, token);
        },
        {
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/tips');
            },
        },
    );

    return mutation;
};
