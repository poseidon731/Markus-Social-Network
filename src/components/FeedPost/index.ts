import styled from "styled-components";

export const FeedPost = styled.section`
    display: grid;
    grid-gap: 3rem;
`;

export const FeedUserContent = styled.section`
    display: flex;
    background-color: var(--white-background);
    width: 100%;
    height: auto;
    padding: 2rem;
    border-radius: 0.5rem;
    flex-direction: column;

    .posted-notice-container {
        position: relative;
    }
`;

export const UserHeadline = styled.div `
    display: flex;

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
        justify-content: space-around;
    }

    .first-headline {
        display: flex;
        align-items: center;

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
        font-weight: 600;
        color: var(--title-color);
        

        span.activity-year {
            font-size: 1.2rem;

            a {
                color: var(--title-color);

                :hover {
                    color: var(--main-color);
                }
            }

        }
        
        .second-headline-icon {
            font-size: 1.7rem;
        }
    }

    @media (max-width: 768px) {
        .first-headline p {
            display: block;
            margin-bottom: 0.8rem;
        }
    }

    @media (max-width: 425px) {
        .first-headline p {
            font-size: 1.2rem;
        }
    }
`;

export const UserCover = styled.div `
    display: flex;
    margin-top: 1.5rem;

    img {
        width: 100%;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        max-height: 150px;
    }
`;

export const UserInfo = styled.div `
    display: flex;
    width: 100%;
    padding-bottom: 3%;
    border-left: 1px solid var(--border-light-white);
    border-right: 1px solid var(--border-light-white);
    border-bottom: 1px solid var(--border-light-white);
    border-radius: 5px;

    img {
        display: flex;
        margin-top: -9rem;
        margin-left: 3rem;
        background-color: var(--white-background);
        padding: 0.8rem;
        border-radius: 3px;
    }

    .user-friend-headline {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-left: 2rem;
        margin-top: 1rem;

        span.user-friend a {
            color: var(--title-color);
            font-weight: 700;
            font-size: 1.5rem;

                :hover {
                    color: var(--main-color);
                }
        }

        span.nickname {
            font-size: 1.2rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        .user-friend-headline {
            align-items: center;
        }
    }

    @media (max-width: 480px) {
        .user-friends-profile img {
            width: 60%;
            margin-top: -4.5rem;
        }

        .user-friend-headline {
            margin: auto;
        }
    }
`;

//ESTILO POST NOTICE ACIMA

export const PostArea = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PostText = styled.div `
    background-color: var(--white-background);
    width: 100%;
    padding: 2rem 2rem 4rem 2rem;
    font-size: 1.4rem;
`;

export const PostCover = styled.div `
    width: 100%;

    img {
        width: 100%;
    }
`;

export const ActivityAreaPost = styled.div `
    display: flex;
    width: 100%;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;

    .activity-area-liked {
        display: flex;
        align-items: center;
    }

    .activity-comments-area {
        display: flex;
        align-items: center;

        span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .comments-icon {
            font-size: 1.7rem;
        }
    }

    img {
        border: 3px solid var(--white-text-colo);
        border-radius: 50%;
        margin-left: -0.5rem;
        width: 3rem;
    }

    a:first-child img {
       margin-left: 0;
    }

    span {
        margin-left: 3px;
        font-size: 1.2rem;
    }
`;