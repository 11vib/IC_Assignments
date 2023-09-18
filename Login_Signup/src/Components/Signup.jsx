import './Page.css'
const Signup = () => {
    return (
        <>
            <div className="d-flex justify-content-center bg-secondary align-items-center vh-100" id="bimg">
                <div className="border border-2 border-dark p-5 mt-4 bg-white">
                    <form>
                        <h2 className="text-center mb-2">Sign Up</h2>
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
                            <label htmlFor="password">Create Password &emsp;:&emsp;</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="form-control"
                                name="Password"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="text">Full Name &emsp;:&emsp;</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone">Mobile Number &emsp;:&emsp;</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile No."
                            ></input>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-outline-dark" type="submit">
                                SignUp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;