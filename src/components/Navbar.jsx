import { Link } from "react-router-dom"
import logo from "../assets/images/daily-logo.png"

function Navbar() {
    // Styles
    const navbarStyles = {
        backgroundColor: "#fbe6ec",
        display: "flex",
        justifyContent: "space-between",
        padding: "16px 40px 16px 40px",
        alignItems: "center",
        margin:"-8px -8px 0px -8px"
    }

    const divLinksStyles = {
        display: "flex",
        gap:"24px"
    }

    const linkStyles = {
        textDecoration: "none",
        color: "#222",
    }
  return (
    <nav style={navbarStyles}>
            <img src={logo} alt="daily logo" height="40px"/>
        <div style={divLinksStyles}>
            <Link style={linkStyles} to="/"> Inicio </Link>
            <Link style={linkStyles} to="/about">Sobre el proyecto</Link>
            <Link style={linkStyles} to="/contacto"> Contacto </Link>
        </div>
    </nav>
  )
}

export default Navbar