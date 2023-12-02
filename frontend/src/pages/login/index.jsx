import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { Button, ErrorMessage, Input, Loading } from "../../components"
import { Body, CreateAcc, Logo, Main, Spacing } from "./styles"

const Login = () => {
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()

   const schema = yup.object({
      email: yup.string().required("Campo Obrigatório").email("Email inválido"),
      password: yup.string().required("Campo Obrigatório").min(6, "Mínimo 6 caracteres")
   })

   const { handleSubmit, register, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
   })

   const login = async (data) => {
      setLoading(true)
      try {
         const response = await axios.post("http://localhost:3001/login", data)
         const token = { token: response?.data?.token }
         localStorage.setItem("cripto", JSON.stringify(token))
         setLoading(false)
         navigate("/")
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
                  {errors?.password && (<ErrorMessage>{errors.password.message}</ErrorMessage>)}
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