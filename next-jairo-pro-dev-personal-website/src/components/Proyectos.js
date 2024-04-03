import Link from 'next/link'

export default function Proyectos() {
    return (
        <section className="topics" id="topics" aria-labelledby="topic-label">
            <div className="container">
                <div className="card topic-card">
                    <div className="card-content">
                        <h2 className="headline headline-2 section-title card-title" id="topic-label">
                            Projects
                        </h2>
                        <p className="card-text">
                            Please help us to build a better future with Technology, Innovation and Love...
                        </p>
                        <div className="btn-group">
                            <button className="btn-icon" aria-label="previous" data-slider-prev>
                                <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                            </button>
                            <button className="btn-icon" aria-label="next" data-slider-next>
                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </button>
                        </div>
                    </div>
                    <div className="slider" data-slider>
                        <ul className="slider-list" data-slider-container>
                            <li className="slider-item">
                                <Link href="https://BuscAdis.com">
                                    <a className="slider-card">
                                        <figure className="slider-banner img-holder" style={{width: 507, height: 618}}>
                                            <img src="/assets/images/Buscadis.png" width="507" height="618" loading="lazy" alt="Sport" className="img-cover" />
                                        </figure>
                                        <div className="slider-content">
                                            <span className="slider-title">BuscAdis</span>
                                            <p className="slider-subtitle">Ad-Tech StartUp Platform</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className="slider-item">
                                <Link href="/pages/DiverEdu">
                                    <a className="slider-card">
                                        <figure className="slider-banner img-holder" style={{width: 507, height: 618}}>
                                            <img src="/assets/images/DiverEdu-future.png" width="507" height="618" loading="lazy" alt="Sport" className="img-cover" />
                                        </figure>
                                        <div className="slider-content">
                                            <span className="slider-title">DiverEdu</span>
                                            <p className="slider-subtitle">Ed-Tech StartUp Platform</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className="slider-item">
                                <Link href="/Portafolio/profile.html">
                                    <a className="slider-card">
                                        <figure className="slider-banner img-holder" style={{width: 507, height: 618}}>
                                            <img src="/assets/images/prodev.png" width="507" height="618" loading="lazy" alt="Travel" className="img-cover" />
                                        </figure>
                                        <div className="slider-content">
                                            <span className="slider-title">Pro-Dev</span>
                                            <p className="slider-subtitle">Professional Development & Growth</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className="slider-item">
                                <Link href="#">
                                    <a className="slider-card">
                                        <figure className="slider-banner img-holder" style={{width: 507, height: 618}}>
                                            <img src="/assets/images/scitech.png" width="507" height="618" loading="lazy" alt="Design" className="img-cover" />
                                        </figure>
                                        <div className="slider-content">
                                            <span className="slider-title">Sci-Tech</span>
                                            <p className="slider-subtitle">Science & Technology</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className="slider-item">
                                <Link href="#">
                                    <a className="slider-card">
                                        <figure className="slider-banner img-holder" style={{width: 507, height: 618}}>
                                            <img src="/assets/images/education.png" width="507" height="618" loading="lazy" alt="Movie" className="img-cover" />
                                        </figure>
                                        <div className="slider-content">
                                            <span className="slider-title">Education</span>
                                            <p className="slider-subtitle">Study & Self Development</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className="slider-item">
                                <Link href="#">
                                    <a className="slider-card">
                                        <figure className="slider-banner img-holder" style={{width: 507, height: 618}}>
                                            <img src="/assets/images/codelents.png" width="507" height="618" loading="lazy" alt="Lifestyle" className="img-cover" />
                                        </figure>
                                        <div className="slider-content">
                                            <span className="slider-title">Code</span>
                                            <p className="slider-subtitle">Programming & Design</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}