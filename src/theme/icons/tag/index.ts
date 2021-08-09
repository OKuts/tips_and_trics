import { FC } from 'react';

import { JS } from './JS';
import { TS } from './TS';
import { ReactIcon } from './ReactIcon';
import { VSCode } from './VSCode';
import { NextJS } from './NextJS';
import { NodeJS } from './NodeJS';
import { CSS } from './CSS';
import { UI_UX } from './UI_UX';
import { GraphQL } from './GraphQL';
import { Testing } from './Testing';
import { Npm } from './Npm';
import { Git } from './Git';
import { Tools } from './Tools';
import { MacOS } from './MacOS';

/* Other */
import { TagEnum } from '../../../types';

export const icons: { [key: string]: FC } = {
    [ TagEnum.JAVASCRIPT ]: JS,
    [ TagEnum.TYPESCRIPT ]: TS,
    [ TagEnum.REACT ]:      ReactIcon,
    [ TagEnum.VSCODE ]:     VSCode,
    [ TagEnum.VSCODE ]:     VSCode,
    [ TagEnum.NEXT_JS ]:    NextJS,
    [ TagEnum.NODE_JS ]:    NodeJS,
    [ TagEnum.CSS ]:        CSS,
    [ TagEnum.UI_UX ]:      UI_UX,
    [ TagEnum.GRAPHQL ]:    GraphQL,
    [ TagEnum.TESTING ]:    Testing,
    [ TagEnum.NPM ]:        Npm,
    [ TagEnum.GIT ]:        Git,
    [ TagEnum.TOOLS ]:      Tools,
    [ TagEnum.MACOS ]:      MacOS,
};
