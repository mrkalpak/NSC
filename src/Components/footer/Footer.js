import "./Footer.css";

function Footer() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className="container text-white " >
                <div className="row py-5">
                    <div className="col-md-6">
                        <h3>
                            Let’s be Friends
                        </h3>
                        <p style={{ fontSize: 'smaller' }}>
                            Subscribe to receive updates, access to exclusive Deals, and more
                        </p>
                        <div class="input-group w-75 my-4">
                            <input type="text" id="email-footer" class="form-control bg-transparent rounded-0 border-white" placeholder="Enter your mail" />
                            <button class="btn btn-light  rounded-0" type="button" id="button-addon2">Subscriber</button>
                        </div>
                        <a className="me-3 fs-4" href="./">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a className="me-3 fs-4" href="./">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a className="me-3 fs-4" href="./">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <a className="me-3 fs-4" href="./">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>

                    <div className="col-md-3">
                        <h5 className="mb-4">
                            QUICK LINK
                        </h5>
                        <a className="mb-3" href="">
                            Home
                        </a><br />
                        <a className="mb-3" href="">
                            Featured Products
                        </a><br />
                        <a className="mb-3" href="">
                            Best sellers
                        </a><br />
                        <a className="mb-3" href="">
                            New Collection
                        </a><br />
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-4">
                            SUPPORT
                        </h5>
                        <a className="mb-3" href="">
                            My Account
                        </a><br />
                        <a className="mb-3" href="">
                            FAQs
                        </a><br />
                        <a className="mb-3" href="">
                            Return & Exchange
                        </a><br />
                        <a className="mb-3" href="">
                            Privacy Policy
                        </a><br />
                        <a className="mb-3" href="">
                            Contact US
                        </a><br />
                    </div>
                </div>
                <hr className="text-white" />
                <div className="d-flex ms-auto me-auto justify-content-between " style={{ width: 'fit-content' }}>
                    <li className=" me-3 mb-2">
                        <a href="./">
                            Privacy Policy
                        </a>
                    </li>
                    <li className=" me-3 mb-2">
                        <a href="./">
                            Terms of Use
                        </a>

                    </li>
                    <li className=" me-3 mb-2">
                        2024 All Rights Reserved NSC
                    </li>
                </div>
            </div>
        </div>
    );

}
export default Footer;