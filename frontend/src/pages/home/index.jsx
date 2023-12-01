import { useEffect } from "react"

const Home = () => {
    const data = JSON.parse(localStorage.getItem("cripto"))

    useEffect(() => {
        console.log(data.token)
    }, [data])

    return <p>Home</p>
}

export default Home