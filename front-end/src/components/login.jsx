import Form from "./form";
import "../assets/login.css";
function Login() {
  const handleSubmit = (h) => {
    h.preventDefault();
  };
  return (
    <div className="form-completed">
      <h2>Login</h2>
      <form action="">
        <Form type="text" title="Nome" placeholder=" Nome completo" />
        <Form type="text" title="Email" placeholder=" Email válido" />
        <button onClick={handleSubmit} type="submit">
          Entry
        </button>
      </form>
    </div>
  );
}

export default Login;
