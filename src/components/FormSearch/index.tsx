import React from "react";
import { Container } from "./styles";
import SearchIcon from '@mui/icons-material/Search';

type FormSearchTypes = {
    placeholderText: string
}

const FormSearch = ({placeholderText}: FormSearchTypes) => {
    return (
        <Container>
            <div className="input-area">
                <input 
                    type="text"
                    id="form-search"
                    name="search"
                    placeholder={placeholderText} 
                />
            </div>
            <button className="search-button">
                <SearchIcon className="icon-search"/>
            </button>
        </Container>
    );
}

export default FormSearch;