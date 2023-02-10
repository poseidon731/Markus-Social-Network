import styled from 'styled-components';
import { 
  FormLogin,
  LoginContainer
} from "../../components/Login/styles"

type SignupAttributes = {
  gridStyle?: string,
  rowMargin?: string,
  fontSizeLegend?: string
}

export const SignupContainer = styled(LoginContainer)`
  /* margin: 15rem 0; */

  /* @media (min-width: 601px) and (max-width: 768px){
    margin: 7rem 0;
  } */

  @media (max-width: 511px) {
    /* margin: 20rem 0; */
    align-items: stretch;
  }
`;

export const SignupForm = styled(FormLogin)``;

export const InputRow = styled.div<SignupAttributes>`
  display: grid;
  grid-template-columns: ${props => props.gridStyle};
  gap: 15px;
  margin-top: ${props => props.rowMargin};
`;

export const Select = styled.select`
  padding: 1.4rem;
  border: 1px solid var(--border-light-white);
  outline: none;
  background-color: transparent;
  -webkit-appearance: none;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Yrq8Y9PlN02.png);
  background-position: right 5px center;
  background-repeat: no-repeat;
  background-size: 1.4rem;
  padding-right: 2rem;
  font-size: 1.5rem;
  color: var(--title-color);
  border-radius: 0.5rem;
`;

export const InputRadio = styled.input``;

export const GenderRadioSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-light-white);
  color: var(--title-color);
`;

export const Legend = styled.legend<SignupAttributes>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.8rem 0 0.5rem;
  color: var(--title-color);
  font-size: ${props => props.fontSizeLegend};
`;