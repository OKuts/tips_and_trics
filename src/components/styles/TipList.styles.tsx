import styled from 'styled-components';
import { CenterLayout } from './CenterLayoutMixin.styles';

export const TipListWrapper = styled.section`
${CenterLayout};

display: grid;
grid-area: content;
grid-template-columns: 1fr;
gap: 20px;
padding-top: 20px;

@media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
}

@media (min-width: $content-width) {
    grid-template-columns: 1fr 1fr 1fr;
}

& > h1 {
    grid-column: 1 / -1;
    text-align: center;
}

& article {
    display: grid;
    grid-template-rows: 200px 1fr 40px;
    border-radius: var(--border-radius-angle);
    box-shadow: var(--box-shadow);

    & header,
    & footer {
        font-weight: 500;
        text-align: center;
    }

    & header {
        display: grid;
        grid-template-columns: 144px 1fr;
        align-items: center;
        justify-content: flex-start;
        padding: 0 12px;
        color: var(--color-2);
        word-wrap: break-word;
        background-color: var(--color-7);
        border-radius: var(--rounded-corners-top);

        & svg {
            --size: 144px;

            width: var(--size);
            min-width: var(--size);
            height: var(--size);
            min-height: var(--size);
            margin-right: 5px;
        }

        & h1 {
            font-size: 24px;
            word-wrap: break-word;
        }
    }

    & main {
        padding: 24px 18px 32px;

        & time {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            font-family: 'roboto mono', monospace;
            font-weight: 600;
            color: var(--color-4);

            & svg {
                --size: 60px;

                width: var(--size);
                height: var(--size);
                margin-right: 10px;
            }

            & div {
                display: flex;
                flex-direction: column;
            }
        }

        & h2 {
            margin-bottom: 12px;
            font-size: 24px;
            font-weight: 500;
        }

        & p {
            font-weight: 400;
        }
    }

    & footer {
        font-weight: 700;
        cursor: pointer;
        border-radius: var(--rounded-corners-bottom);

        &:hover {
            color: var(--color-2);
            background-color: var(--color-7);
        }

        & a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            color: inherit;
            text-decoration: none;
        }
    }
}

@media screen and (max-width: 768px) {
    gap: 10px;
    padding: 0 10px;
    padding-top: 10px;

    article {
        grid-template-rows: auto 1fr 50px;

        header {
            grid-template-columns: 100px auto;
            padding: 10px 10px;

            svg {
                --size: 100px;
            }

            h1 {
                padding: 0 5px;
                font-size: 22px;
                line-height: 1;
            }
        }

        main {
            padding: 10px;

            time {
                margin-bottom: 15px;

                span {
                    font-size: 14px;
                }

                svg {
                    display: none;
                }
            }

            h2 {
                margin-bottom: 15px;
                font-size: 22px;
                line-height: 1;
            }
        }

        footer {
            padding: 10px;
        }
    }
}
`;
