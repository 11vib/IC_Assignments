import './Page.css'
const Login = () => {
    return (
        <div>
            <div className="d-flex justify-content-center bg-secondary align-items-center vh-100" id="bimg">
                <div className="border border-2 border-dark p-5 mt-4 bg-white">
                    <form>
                        <h2 className="text-center mb-2">Login</h2>
                        <div className="mb-3">
                            <label htmlFor="email">E-mail Id &emsp;:&emsp;</label>
                            <input
                                type="email"
                                placeholder="Enter your E-mail"
                                className="form-control"
                                name="Email"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password &emsp;:&emsp;</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="form-control"
                                name="Password"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <input
                                type="checkbox"
                                className="custom-control custom-checkbox m-1"
                            ></input>
                            <label htmlFor="checkbox" className="ms-1">
                                Remember Me!
                            </label>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-outline-dark" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;