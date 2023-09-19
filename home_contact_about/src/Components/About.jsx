import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
    return (
        <>
            <div className="container">
                <div class="dropdown m-5">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">Home</a></li>
                        <li><a class="dropdown-item" href="/about">About</a></li>
                        <li><a class="dropdown-item" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default About;