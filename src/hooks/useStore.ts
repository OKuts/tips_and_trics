/* Core */
import { useContext } from 'react';

/* Other */
import { Context } from '../lib';

export const useStore = () => {
    const store = useContext(Context);

    return store;
};
