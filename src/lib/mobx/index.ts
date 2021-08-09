// Storages
import { AuthStore } from './authStore';
import { SettingsStore } from './settingsStore';
import { TagStore } from './tagStore';

class RootStore {
    tagStore: TagStore;
    settingsStore: SettingsStore;
    authStore: AuthStore;

    constructor() {
        this.tagStore = new TagStore();
        this.settingsStore = new SettingsStore();
        this.authStore = new AuthStore();
    }
}

const rootStore = new RootStore();

export {
    RootStore,
    rootStore,
};
