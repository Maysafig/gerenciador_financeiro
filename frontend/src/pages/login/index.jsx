import { Main, Body, Logo, Spacing } from "./styles"
import { Input, Button } from "../../components"


const Login = () => {
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
            </Body>
        </Main>
    )
}

export default Login