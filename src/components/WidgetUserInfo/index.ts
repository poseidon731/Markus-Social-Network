import styled from "styled-components";

type WidgetInfoProps = {
    userStatusColor?: string,
    marginB?: string
}

export const WidgetUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;

    .user-status-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
`;

export const UserStatus = styled.div<WidgetInfoProps>`
    background-color: ${props => props.userStatusColor};
    padding: 0.6rem 1.2rem;
    color: var(--white-text-color);
    margin-right: 1rem;
    border-radius: 3px;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
`;

export const HeadlineMembersInfo = styled.div<WidgetInfoProps>`
    display: flex;
    padding: 2.5rem 0 0;

    .user-headline-image img {
        border-radius: 50%;
        width: 5rem;
    }

    .user-headline-info {
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

        .user-check-icon {
            font-size: 1.8rem;
            font-weight: 600;
            margin-left: 0.4rem;
            background-color: var(--ligth-blue);
            color: var(--white-text-color);
            border-radius: 50%;
            padding: 2px;
            
        }
    }

    .second-headline {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--title-color);
        

        span.activity-year,
        span.nickname {
            font-size: 1rem;
            color: var(--text-color);
            text-transform: uppercase;
            font-weight: 500;
        }
    }

`;