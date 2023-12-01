import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register"
import Private from "./private"

const RoutesComponent= () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Private Component={Home} />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default RoutesComponent