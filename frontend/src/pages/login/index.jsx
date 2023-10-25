import {Main, Body, Logo, Spacing, CreateAcc} from "./styles"
import {Input, Button, ErrorMessage, Loading} from "../../components"
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
import {useState} from "react"

const Login = () => {
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()

   const schema = yup.object({
      email: yup.string().required("Campo Obrigatório").email("Email inválido"),
      password: yup.string().required("Campo Obrigatório").min(6, "Mínimo 6 caracteres")
   })

   const {handleSubmit, register, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
   })

   const login = async (data) => {
      setLoading(true)
      try
      {
         const response = await axios.post("http://localhost:3001/login", data)
         console.log(response?.data)
         setLoading(false)
      } catch (e) {
         alert("Erro, tente novamente")
         setLoading(false)
      }
   }

   return (
      <Main>
         <Body>
            {loading && <Loading />}
            {!loading && ( 
               <form onSubmit={handleSubmit(login)}>
               <Logo>Gerenciador Financeiro</Logo>
               <Input label="Email" placeholder="Digite o email" {...register("email")} />
               {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
               <Spacing />
               <Input label="Senha" placeholder="Digite a senha" type="password" {...register("password")} />
               {errors?.password && ( <ErrorMessage>{errors.password.message}</ErrorMessage>)}
               <Spacing />
               <Button label="Entrar" variant="btn-primary" type="submit" />
               <Spacing />
               <CreateAcc onClick={() => navigate("/register")}>Criar conta</CreateAcc>
            </form>)}
         </Body>
      </Main>
   )
}

export default Login