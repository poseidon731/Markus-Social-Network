import styled from "styled-components";

export const CommentsContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    border-top: 1px solid var(--border-light-white);

     .comment-headline {
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 1rem;

        .user-comment-headline-info {
            display: flex;
            align-items: center;
        }

        .user-comment-headline-info a {
            display: flex;
            align-items: center;
        }

       .user-comment-headline-info img {
           width: 3.5rem;
           border-radius: 50%;
           margin-right: 1rem;
       }

       .user-comment-headline-info span {
            font-size: 1.5rem;
            font-weight: 700;
            display: flex;
            align-items: center;
       }

       .comment-date {
            display: flex;
            align-items: center;
            gap: 0.5rem;
       }

       .comment-date .acess-time-icon {
            font-size: 1.7rem;
       }

       .comment-date {
           color: var(--title-color);
           font-size: 1.2rem;
           font-weight: 700;
       }

    }

    .comment-text {
            margin: 1rem 1rem 2rem 5.5rem;
            font-size: 1.4rem;
        }

    @media (max-width: 459px) {
        .comment-headline {
            display: block;
        }

        .user-comment-headline-info {
            margin-bottom: 0.8rem;
        }

        .comment-text {
            margin: 1rem;
        }
    }
`;