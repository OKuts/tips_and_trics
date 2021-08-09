/* Core */
import { makeAutoObservable } from 'mobx';

class SettingsStore {
    isSettingsOpen = false;

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    toggleSettingsIsOpen(state: boolean) {
        this.isSettingsOpen = state;
    }
}

export { SettingsStore };
