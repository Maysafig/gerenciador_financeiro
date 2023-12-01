const Home = () => {
    const token = localStorage.getItem("cripto")

    // eslint-disable-next-line no-undef
    useEffect(() => {
        console.log(token)
    }, [token])

     return <p>Home</p>
}

export default Home