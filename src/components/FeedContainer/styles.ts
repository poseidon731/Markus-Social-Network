import styled from "styled-components";

export const Container = styled.section`
     
     .feed-content-container {
        display: grid;
        grid-template-columns: 3fr 30%;
        grid-gap: 4rem;
        width: 100%;
        height: auto;
        padding: 3.5rem;
        background-color: var(--main-background-content);
        color: var(--text-color);
    }

    .feed-content-search-activity, .feed-content-search-activity-mobile {
        display: flex;
        width: 100%;
        height: auto;
        background-color: var(--main-background-content);
        padding: 3.5rem 3.5rem 0;
    }

    .content-activity-menu {
        display: flex;
        width: 100%;
        height: auto;
        background-color: var(--main-background-content);
        padding: 3.5rem 3.5rem 0;

        @media (min-width: 769px) {
            display: none;
        }
    }

    .content-activity-menu-none {
        display: none;
        width: 100%;
        height: auto;
        background-color: var(--main-background-content);
        padding: 3.5rem 3.5rem 0;
    }

    .content-activity-search {
        display: flex;
        width: 100%;
        height: auto;
        background-color: var(--main-background-content);
        padding: 3.5rem 3.5rem 0;

        @media (min-width: 769px) {
            display: none;
        }
    }

    .content-activity-search-none {
        display: none;
        width: 100%;
        height: auto;
        background-color: var(--main-background-content);
        padding: 3.5rem 3.5rem 0;
    }

    .content-activity-settings {
        display: flex;
        width: 100%;
        height: auto;
        background-color: var(--main-background-content);
        padding: 3.5rem 3.5rem 0;

        @media (min-width: 769px) {
            display: none;
        }
    }

    .content-activity-settings-none {
        display: none;
        width: 100%;
        height: auto;
        background-color: var(--main-background-content);
        padding: 3.5rem 3.5rem 0;
    }
    
    .content-options-mobile {
        width: 100%;
        background-color: var(--white-background);
        padding: 1.5rem;
        border-radius: 0.5rem;
    }

    .filter-box {
        background: var(--main-blue);
        padding: 1.5rem;
        font-size: 1.3rem;
        text-align: center;
        color: var(--white-text-color);
        border-radius: 0.3rem;
        margin-bottom: 1rem;
    }

    .activity-select {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .activity-select-headline {
        width: 100%;
        text-align: center;
        background-color: var(--white-background);
        color: var(--text-color);
        padding: 0.7rem;
        border-radius: 3px;
        font-size: 1.4rem;
        cursor: pointer;
        border: 1px solid var(--border-light-white);
        display: flex;
        align-items: center;

        span.headline-text {
            width: 90%;
        }

        span.headline-icon {
            width: 10%;
            font-size: 2.5rem;
            font-weight: 700;
            transform: rotate(270deg);
        }

        span.headline-text:before {
            content: "−";
            margin-right: 0.5rem;
        }

        span.headline-text:after {
            content: "−";
            margin-left: 0.5rem;
        }
    }

    ul.activity-select-options {
        width: 100%;
        list-style: none;
        border-radius: 0.3rem;
        background-color: var(--white-background);
        color: var(--text-color);
        position: absolute;
        opacity: 1;
        top: 5rem;
        transition: all ease 0.5s;
        max-height: 400px;
        overflow: auto;
        z-index: 2;
    }

    ul.activity-select-options-none {
        width: 100%;
        list-style: none;
        position: absolute;
        top: 0;
        opacity: 0;
        transition: all ease 0.5s;
        z-index: -999;
    }

    ul.activity-select-options li {
        cursor: pointer;
        padding: 1.3rem 3rem 1.3rem 1.8rem;
        font-size: 1.4rem;
    }

    ul.activity-select-options li:first-child:before {
        content: "−";
        margin-right: 5px;
    }

    ul.activity-select-options li:first-child:after {
        content: "−";
        margin-left: 5px;
    }

    ul.activity-select-options li:hover {
        background-color: var(--main-background-content);
    }

    .display-menbers-number {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--title-color);

        span {
            color: var(--title-color);
            font-weight: 600;
            font-size: 1.3rem;
        }

        .number-of-members {
            font-weight: 400;
        }

    }

    @media (max-width: 768px) {
        .feed-content-container {
            grid-template-columns: 1fr;
        }

        .feed-content-search-activity {
            display: none;
        }
    }

    @media (min-width: 769px) {
        .feed-content-search-activity-mobile {
            display: none;
        }
    }
`;