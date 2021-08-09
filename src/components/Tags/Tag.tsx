/* Core */
import { FC, ReactElement } from 'react';

import { TagWrapper } from '../styles/Tag.styles';
/* Other */
import { getTagIcon } from '../../helpers';
import { ITagModel } from '../../types';

export const Tag: FC<IPropTypes> = ({
    id, name, dataActive, handleTagClick, theme,
}) => {
    const TagIcon = getTagIcon(name);

    return (
        <TagWrapper
            theme = { theme }
            role = 'listitem'
            data-active = { dataActive }
            onClick = { () => handleTagClick(id, name) }>
            { /* className = 'tag'> */ }
            <TagIcon /> { name }
        </TagWrapper>
    );
};

interface IPropTypes extends ITagModel {
    dataActive: boolean;
    handleTagClick: (id: string, name: string) => void;
    children?: ReactElement;
    theme: 'dark' | 'light';
}
