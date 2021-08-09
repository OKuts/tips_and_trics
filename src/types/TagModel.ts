export enum TagEnum {
    JAVASCRIPT = 'JavaScript',
    TYPESCRIPT = 'TypeScript',
    REACT = 'React',
    VSCODE = 'VSCode',
    NEXT_JS = 'Next.js',
    NODE_JS = 'Node.js',
    CSS = 'CSS',
    UI_UX = 'UI/UX',
    GRAPHQL = 'GraphQL',
    TESTING = 'Testing',
    NPM = 'Npm',
    GIT = 'Git',
    TOOLS = 'Tools',
    MACOS = 'macOS',
}

export interface ITagModel {
    id: string;
    name: TagEnum;
}
