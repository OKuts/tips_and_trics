import styled from 'styled-components';

export const TagWrapper = styled.span`
    display: flex;
    align-items: center;
    padding: 8px 14px;
    color: var(--color-2);
    color: ${(props) => props.theme === 'light' && 'var(--color-4)'};
    cursor: pointer;
    background-color: var(--color-4);
    background-color: ${(props) => props.theme === 'light' && 'var(--color-2)'};
    border: 2px solid;
    border-color: transparent;
    border-color: ${(props) => props.theme === 'light' && 'var(--color-6)'};
    border-radius: 30px;
    transition: border-color 0.1s ease;

    &:hover {
        border-color: var(--color-6);
        border-color: ${(props) => props.theme === 'light' && 'var(--color-4)'};
    }

    &[data-active='true'] {
        border-color: var(--color-3);
    }

    & svg {
        --size: 24px;

        width: var(--size);
        height: var(--size);
        margin-right: 5px;
    }

    @media screen and (max-width: 1024px) {
        padding: 5px 7px;
        font-size: 14px;
        border-radius: 20px;
    }
`;
