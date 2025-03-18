import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <Link to='/contact'>Contact</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/aboutme'>About me</Link>
        <Link to='/hireme'>Hire me</Link>

        
        </>
        
    )
}

export default Home