import logoNegative from "../assets/images/daily-negative.png";

function Footer() {
  // Styles
  const footerStyles = {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 40px 16px 40px",
    backgroundColor: "#222",
    color: "#e4e2dd",
    alignItems: "center",
    margin: "0px -8px -8px -8px"
  };

  const anchorStyle = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fb89a9"
  };
  return (
    <footer style={footerStyles}>
        <div>
        <img src={logoNegative} alt="dayly logo" height="32px"/>
      </div>
      <div>
        <p>Desarrollado y diseñado por Águeda Muela</p>
        <p>
          Visita mi{" "}
          <a style={anchorStyle} href="https://github.com/lamardemuela/miniproject-toDo-app">
            Github
          </a>
        </p>
      </div>
      
      <div>
        <h4>Tecnologías usadas</h4>
        <p>React JS</p>
        <p>JavaScript</p>
        <p>React Components</p>
      </div>
    </footer>
  );
}

export default Footer;
