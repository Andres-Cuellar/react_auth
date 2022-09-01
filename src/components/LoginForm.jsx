import { useState } from "react";
import useAuth from "../hooks/useAuth";
import AuthService from "../services/authService";

const LoginForm = () => {
  // const { setLogged } = useAuth();

  const authService = new AuthService();

  const [email, setEmail] = useState("");
  const [discordId, setDiscordId] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const valuesInput = {
    email,
    discordId,
  };

  const autoEnableAndDisableError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
      setErrorMessage("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedStatus = await authService.login(valuesInput);

    if (loggedStatus === 200) {
      // setLogged(true);
      setErrorMessage("Logueado");
      autoEnableAndDisableError();
    } else {
      setErrorMessage("No Logueado");
      autoEnableAndDisableError();
    }
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  className="img-fluid rounded-left"
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <span className="h1 fw-bold mb-0">Logo</span>
                    </div>
                    <h5 className="fw-normal mb-3 pb-3">
                      Sign into your account
                    </h5>
                    <div className="form-outline mb-4">
                      <input
                        data-testid="email"
                        type="text"
                        placeholder="Email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        data-testid="discord"
                        type="text"
                        placeholder="Discord"
                        value={discordId}
                        onChange={(e) => setDiscordId(e.target.value)}
                        id="form2Example27"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button"
                        onClick={handleSubmit}
                        data-testid="btn-submit"
                      >
                        Login
                      </button>
                    </div>
                    {error ? (
                      <div data-testid="error-message">{errorMessage}</div>
                    ) : (
                      <div>&nbsp;</div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
