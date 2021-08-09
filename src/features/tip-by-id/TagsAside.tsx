/* Core */
import { FC } from 'react';
import { Link } from 'react-router-dom';

/* Components */
import { Tag } from '../../components';

/* Other */
import { fetchify, getTagIcon } from '../../helpers';
import { useStore, useTags } from '../../hooks';

export const TagsAside: FC = () => {
    const { tagStore } = useStore();
    const { data: tags, isFetched } = useTags();

    const { setSelectedTagId } = tagStore;

    const tagsJSX = tags?.map((tag) => {
        const TagIcon = getTagIcon(tag.name);

        return (
            <Link to = '/topics-by-tag' key = { tag.id }>
                <Tag
                    theme = 'light'
                    handleTagClick = { () => setSelectedTagId(tag.id) }
                    dataActive = { false }
                    id = { tag.id }
                    key = { tag.id }
                    name = { tag.name }>
                    <TagIcon />
                </Tag>
            </Link>
        );
    });

    return (
        <aside className = 'tags-aside'>
            <h1>Тэги</h1>
            <div>{ fetchify(isFetched, tagsJSX) }</div>
        </aside>
    );
};
