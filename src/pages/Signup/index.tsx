import React, { useState } from "react";
import { 
  InputRow,
  SignupContainer, 
  SignupForm,
  Select, 
  InputRadio,
  GenderRadioSelect,
  Legend
} from "./styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Logo from "../../components/Logo";
import { 
  FormButtomContainer,
  FormButton,
  FormContainer,
  FormHeadline, 
  FormHeadlineDescription, 
  Label, 
  PasswordInput, 
  UserNameInput, 
  UserNameInputContainer,
} from "../../components/Login/styles";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [ showPassword, setShowPassword] = useState(false);

  const [ name, setName ] = useState("");
  const [ surname, setSurname ] = useState("");
  const [ phoneOrEmail, setPhoneOrEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  const handleSignupRedirect = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    if(name !== "" && surname !== "" && phoneOrEmail !== "" && password !== "") {
      if(phoneOrEmail !== "") {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!regex.test(phoneOrEmail)){
          alert("E-mail digitado não é válido")
        } else {
          alert("Cadastro realizado com sucesso!")
          navigate("/");
        }
      }
    } else {
      alert("Preencha os dados corretamente!")
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  //Função que retorna os dias no mês
  const days = []
  for(let i = 1; i <= 31; i++) {
    days.push(i)
  }

  //Array com os mêses do ano
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  //Função que retorna os anos
  const currentDate = new Date().getFullYear()
  const years = [];
  for(let i = 1910; i <= currentDate; i++) {
    years.push(i)
  }

  return (
    <SignupContainer>
      <SignupForm>
        <FormHeadline>
          <FormHeadlineDescription fontSize="2rem">
            Inscreva-se
          </FormHeadlineDescription>
        </FormHeadline>
        <FormContainer>
          <form>
            <UserNameInputContainer>
              <InputRow gridStyle="repeat(auto-fit, minmax(200px,1fr))">
                <Label htmlFor="name">
                  <UserNameInput
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome"
                    inputWidth="100%"
                    autoComplete="none"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    value={name}
                  />
                </Label>
                <Label htmlFor="surname">
                  <UserNameInput
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Sobrenome"
                    inputWidth="100%"
                    autoComplete="none"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                    value={surname}
                  />
                </Label>
              </InputRow>
              <InputRow rowMargin="15px">
                <Label htmlFor="phone-email">
                  <UserNameInput
                    type="text"
                    name="phone-email"
                    id="phone-email"
                    placeholder="Telefone ou E-mail"
                    inputWidth="100%"
                    autoComplete="none"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneOrEmail(e.target.value)}
                    value={phoneOrEmail}
                  />
                </Label>
                <Label htmlFor="password">
                  <PasswordInput 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    id="password" 
                    placeholder="Senha" 
                    inputWidth="100%"
                    autoComplete="none"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    value={password}
                  />
                  {showPassword ? <VisibilityOffIcon className="visibility-password-icon-signup" onClick={handleShowPassword} /> :  <VisibilityIcon className="visibility-password-icon-signup" onClick={handleShowPassword} />}
                </Label>
              </InputRow> 
              <Legend fontSizeLegend="1.1rem">Data de Nascimento <CalendarMonthIcon /></Legend> 
              <InputRow gridStyle="repeat(auto-fit, minmax(100px,1fr))">
                <Select>
                  {days.map((item) => (
                    <option value={item} key={item}>{item}</option>
                  ))}
                </Select>
                <Select>
                  {months.map(item => (
                    <option value={item} key={item}>{item}</option>
                  ))}
                </Select>
                <Select>
                  {years.map(item => (
                    <option value={item} key={item}>{item}</option>
                  ))}
                </Select>
              </InputRow>
              <Legend fontSizeLegend="1.1rem">Gênero <PeopleAltIcon /></Legend>
              <InputRow gridStyle="repeat(auto-fit, minmax(120px,1fr))">
                <GenderRadioSelect>
                  <Label htmlFor="male">Masculino</Label>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="male"
                    />
                </GenderRadioSelect>
                <GenderRadioSelect>
                  <Label htmlFor="female">Feminino</Label>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="female"
                    />
                </GenderRadioSelect>
                <GenderRadioSelect>
                  <Label htmlFor="another">Outro</Label>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="another"
                    />
                </GenderRadioSelect>
              </InputRow>
            </UserNameInputContainer>
            <FormButtomContainer>
              <FormButton 
                type="submit" 
                value="Inscrever"
                backgroundButton="var(--main-color)"
                onClick={handleSignupRedirect}
              />
            </FormButtomContainer>
          </form>
        </FormContainer>
      </SignupForm>
    </SignupContainer>
  )
}

export default Signup;