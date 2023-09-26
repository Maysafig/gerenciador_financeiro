import { Main, Body, Logo, Spacing, CreateAcc } from "./styles"
import { Input, Button } from "../../components"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate()
    return (
        <Main>
            <Body>
                <Logo>Gerenciador Financeiro</Logo>
                <Spacing />
                <Input label="Email" placeholder="Digite o email" />
                <Spacing />
                <Input label="Senha" placeholder="Digite a senha" type="password" />
                <Spacing />
                <Button label="Entrar" variant="btn-primary" />
                <Spacing />
                <CreateAcc onClick={() => navigate("/register")}>Criar conta</CreateAcc>
            </Body>
        </Main>
    )
}

export default Login