import styled from "styled-components";

type WidgetInfoProps = {
    userStatusColor?: string,
    marginB?: string
}

export const HeadlineGroupInfo = styled.div<WidgetInfoProps>`
    display: flex;
    padding: 2.5rem 0 0;

    .group-headline-image img {
        border-radius: 50%;
        width: 5rem;
    }

    .group-headline-info {
        margin-left: 1.5rem;
        font-size: 1.5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .first-headline {
        display: flex;
        align-items: center;
        margin-bottom: ${props => props.marginB};

        p {
            display: inline-flex;

            a {
                display: inline-flex;
                margin-right: 0.5rem;
                font-weight: 700;
                color: var(--title-color);

                :hover {
                    color: var(--main-color);
                }
            }
        }
    }

    .second-headline {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--title-color);
        

        span.status-group {
            font-size: 1rem;
            color: var(--text-color);
            text-transform: uppercase;
            font-weight: 500;
        }
    }

`;