import styled from "styled-components";

export const Container = styled.section`
    width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 20px;
`;

export const ServiceIcon = styled.div`
    padding: 2.5rem 3rem;
    background: var(--main-background-content);
    border-radius: 50%;
    transition: all ease 0.5s;

    img {
        width: 2.6rem;
    }
`;

export const ServicesTitle = styled.div`
    font-size: 1.5rem;
    color: var(--title-color);
    font-weight: 700;
`;

export const ServiceDescription = styled.div`
    font-size: 1.3rem;
    line-height: 2.4rem;
    text-align: center;
`;