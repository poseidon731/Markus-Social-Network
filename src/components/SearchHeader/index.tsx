import React from "react";
import { Container } from "./styles";

type SearchHeaderProps = {
    children: React.ReactNode
}

const SearchHeader = ({children}: SearchHeaderProps) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default SearchHeader;