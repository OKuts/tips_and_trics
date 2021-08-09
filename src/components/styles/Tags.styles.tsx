import styled from 'styled-components';

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-content: flex-start;
    justify-content: center;
    min-height: 135px;
    padding: 15px;
    background-color: var(--color-7);
    border-radius: var(--rounded-corners-bottom);

    & h1 {
        color: var(--color-2);
    }

    @media screen and (max-width: 1200px) {
        padding: 15px 10px;
    }
`;
