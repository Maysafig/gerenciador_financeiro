import { Main, Body, Logo, Spacing, CreateAcc } from "./styles"
import { Input, Button } from "../../components"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const navigate = useNavigate()
    return (
        <Main>
            <Body>
                <form>
                    <Logo>Gerenciador Financeiro</Logo>
                    <Input label="Nome" placeholder="Digite o nome" required={true} />
                    <Spacing />
                    <Input label="Email" placeholder="Digite o email" required={true} type="email" />
                    <Spacing />
                    <Input label="Senha" placeholder="Digite a senha" type="password" required={true} />
                    <Spacing />
                    <Button label="Criar conta" variant="btn-primary" type="submit"/>
                    <Spacing />
                    <CreateAcc onClick={() => navigate("/login")}>Fazer login</CreateAcc>
                </form>
            </Body>
        </Main>
    )
}

export default Register