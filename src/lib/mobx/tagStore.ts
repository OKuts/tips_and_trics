/* Core */
import { makeAutoObservable } from 'mobx';

class TagStore {
    private id = '';
    private name = '';

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    setSelectedTagId(id: string) {
        this.id = id;
    }

    setSelectedTagName(name: string) {
        this.name = name;
    }

    get selectedTagId() {
        return this.id;
    }

    get tagName() {
        return this.name;
    }
}

export { TagStore };
