import React from 'react';

const HeroSection = () => {
        return (
                <section className="hero" id="home" aria-label="home">
                    <div className="container">
                        <div className="hero-content">
                            <p className="hero-subtitle">
                                Programmer / StartUp Founder / Full Stack Dev / Scientific
                            </p>

                            <h1 className="headline headline-1 section-title">
                                I’m <span className="span">Jairo Saul</span>
                            </h1>
                            <p className="hero-text">
                                🎓 Building
                                <a className="links-inline" href="https://DiverEdu.com">"<u>DiverEdu</u>"</a>
                                → Ed-Tech Start-Up.<br />
                                📢 Building
                                <a className="links-inline" href="https://PublicAdis.com">"<u>PublicAdis</u>"</a>
                                → Ad-Tech Start-Up.
                            </p>

                            <p className="hero-text">
                                📲 CONTENT CREATOR:<br />
                                🎯 - JairoSaul → Personal Growth.<br />
                                🧑🏻‍💻 - Pro-Dev → Professional Development.<br />
                                🧬 - Sci-Tech → Science & Technology.<br />
                                💪🏻 - Well-Fit → Nutrition & Workout.<br />
                                🧠 - Phsyco-Sophia → Mindset & Wisdow.<br />
                            </p>
                            <p><i>✍🏻 "Deep Focus" Book Writer.📚</i></p>

                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    name="email_address"
                                    placeholder="👋🏻Send me a message to chat..."
                                    required
                                    className="input-field"
                                    autoComplete="off"
                                />

                                <button className="btn btn-primary">
                                    <a
                                        href="https://www.linkedin.com/in/JairoProDev/message/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="span">Escríbeme</span>
                                    </a>
                                    <ion-icon
                                        name="arrow-forward-outline"
                                        aria-hidden="true"
                                    ></ion-icon>
                                </button>
                            </div>
                        </div>

                        <div className="hero-banner">
                            <img
                                src="./assets/images/hero-banner.png"
                                alt="Jairo"
                                className="cartoon-me"
                            />

                            <img
                                src="./assets/images/pattern-2.svg"
                                width="27"
                                height="26"
                                alt="shape"
                                className="shape shape-1"
                            />

                            <img
                                src="./assets/images/pattern-3.svg"
                                width="27"
                                height="26"
                                alt="shape"
                                className="shape shape-2"
                            />
                        </div>

                        <img
                            src="./assets/images/shadow-1.svg"
                            width="500"
                            height="800"
                            alt=""
                            className="hero-bg hero-bg-1"
                        />

                        <img
                            src="./assets/images/shadow-2.svg"
                            width="500"
                            height="500"
                            alt=""
                            className="hero-bg hero-bg-2"
                        />
                    </div>
                </section>
        );
};

export default HeroSection;