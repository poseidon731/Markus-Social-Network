import styled from "styled-components";

type FormSearchAttributtes = {
    activityInput?: string,
}

export const Container = styled.form<FormSearchAttributtes>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${props => props.activityInput ? '10px' : '15px'};
    border-radius: ${props => props.activityInput ? '30px' : '0px'};
    background-color: ${props => props.activityInput ? 'var(--white-background)' : 'trasparent'};

    .input-area {
        width: 100%;
    }

    .activity-input-area {
        width: 100%;
        padding: 1rem 0 1rem 1rem;
    }

    input#form-search {
        background-color: transparent;
        outline: none;
        border: none;
        color: var(--input-search-color);
        padding-right: 1.3rem;
        width: 100%;
        ::placeholder {
            color: var(--input-search-color);
        }
    }

    button.search-button {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .icon-search {
        color: var(--input-search-color);
        font-size: 3rem;
    }
`;