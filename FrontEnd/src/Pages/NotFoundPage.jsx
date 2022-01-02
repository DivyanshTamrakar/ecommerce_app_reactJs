import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>

                                <div className="contant_box_404">
                                    <h1 className="h1">Look like you're lost</h1>

                                    <p>
                                        <b>the page you are looking for not avaible!</b>
                                    </p>

                                    <Link to="/" className="link_404">
                                        Go to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFoundPage;