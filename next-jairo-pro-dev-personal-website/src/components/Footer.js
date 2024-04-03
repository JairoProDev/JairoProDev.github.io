import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="card footer">
                    <div className="section footer-top">
                        <div className="footer-brand">
                            <Link href="Portafolio/profile.html">
                                <h3 className="headline headline-3 section-title">
                                    👨🏻‍💻
                                    <span className="span">Jhayro Sasaqui</span>
                                </h3>
                            </Link>

                            <p className="footer-text">
                                "I think: Success is not about being rich or famous, it's about
                                being happy and making a positive difference in the world."
                            </p>
                            <p className="footer-text">
                                "Do what you can, with what you have, wherever you are, but do
                                it now, throw away the excuses, stop wasting your time; FOCUS
                                AND LAUNCH"
                            </p>

                            <p className="footer-list-title">Address</p>

                            <address className="footer-text address">
                                ⚡Internet <br />
                                🌎LATAM <br />
                                📌Cusco, Perú
                            </address>
                        </div>

                        <div className="footer-list">
                            <p className="footer-list-title">Categories</p>

                            <ul>
                                <li>
                                    <Link href="#"><span className="footer-link hover-2">Pro-Dev</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">Sci-Tech</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">Growth</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">DiverEdu</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">PlayBooks</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">PlayCast</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">Future</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">StartUps</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">Venture Cap</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">LATAM</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">Programming</span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="footer-link hover-2">Design</span></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-list">
                            <p className="footer-list-title">Newsletter</p>

                            <p className="footer-text">
                                Sign up to be first to receive the latest stories inspiring us,
                                case studies, and industry news.
                            </p>

                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="input-field"
                                    autoComplete="off"
                                />

                                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    name="email_address"
                                    placeholder="Email address"
                                    required
                                    className="input-field"
                                    autoComplete="off"
                                />

                                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                            </div>

                            <Link href="https://https://twitter.com/intent/follow?screen_name=JairoProDev">
                                <span className="btn btn-primary">
                                    <span className="span">Let's Connect </span>

                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <iframe
                        src="pages/mis-redes.html"
                        frameBorder="0"
                        width="100%"
                        height="215"
                    ></iframe>

                    <div className="footer-bottom">
                        <p className="copyright">
                            &copy; Developed by
                            <Link href="#"><span className="copyright-link">Jhayro Sasaqui: Pro-Dev</span></Link>
                        </p>

                        <ul className="social-list">
                            <li>
                                <Link href="https://twitter.com/intent/follow?screen_name=JairoProDev">
                                    <span className="social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>

                                        <span className="span">Twitter</span>
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://www.linkedin.com/in/JairoProDev/detail/recent-activity/">
                                    <span className="social-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>

                                        <span className="span">LinkedIn</span>
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://instagram.com/jairoprodev/">
                                    <span className="social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>

                                        <span className="span">Instagram</span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}