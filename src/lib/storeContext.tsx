/* Core */
import { FC, createContext, ReactElement } from 'react';

/* Other */
import { RootStore } from './mobx';

export const rootStore = new RootStore();
export const Context = createContext<RootStore>(rootStore);
export const StoreProvider: FC<IStoreProviderPropTypes> = (props) => {
    return <Context.Provider value = { rootStore }>{ props.children }</Context.Provider>;
};

/* Types */
interface IStoreProviderPropTypes {
    children: ReactElement | ReactElement[];
}
