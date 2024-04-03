import Link from 'next/link'

export default function MiHeader() {
    return (
        <header className="header" data-header>
            <div className="container">
                <h3 className="headline headline-3 section-title">
                    <span className="span">Jhayro Sasaqui</span>
                </h3>

                <nav className="navbar" data-navbar>
                    <div className="navbar-top">
                        <Link href="#" className="logo">
                            <img
                                src="/assets/images/logo.svg"
                                width="119"
                                height="37"
                                alt=" logo"
                            />
                        </Link>

                        <button
                            className="nav-close-btn"
                            aria-label="close menu"
                            data-nav-toggler
                        >
                            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                        </button>
                    </div>

                    <ul className="navbar-list">
                        <li>
                            <Link href="Portafolio/profile.html" className="navbar-link hover-1" data-nav-toggler>Perfil</Link>
                        </li>

                        <li>
                            <Link href="#topics" className="navbar-link hover-1" data-nav-toggler>Proyectos</Link>
                        </li>

                        <li>
                            <Link href="#featured" className="navbar-link hover-1" data-nav-toggler>Ensayos</Link>
                        </li>

                        <li>
                            <Link href="#recent" className="navbar-link hover-1" data-nav-toggler>Artículos</Link>
                        </li>

                        <li>
                            <Link href="#" className="navbar-link hover-1" data-nav-toggler>Contáctame</Link>
                        </li>

                        <li>
                            <Link href="Portafolio/profile.html" className="navbar-link hover-1" data-nav-toggler>Portafolio</Link>
                        </li>
                    </ul>

                    <div className="navbar-bottom">
                        <div className="profile-card">
                            <img
                                src="/assets/images/Jairo.png"
                                width="48"
                                height="48"
                                alt="Steven"
                                className="profile-banner"
                            />

                            <div>
                                <p className="card-title">Hello Friend !</p>

                                <p className="card-subtitle">You have 3 new messages</p>
                            </div>
                        </div>

                        <ul className="link-list">
                            <li>
                                <Link href="#" className="navbar-bottom-link hover-1">Profile</Link>
                            </li>

                            <li>
                                <Link href="#" className="navbar-bottom-link hover-1">Articles Saved</Link>
                            </li>

                            <li>
                                <Link href="#" className="navbar-bottom-link hover-1">Add New Post</Link>
                            </li>

                            <li>
                                <Link href="#" className="navbar-bottom-link hover-1">My Likes</Link>
                            </li>

                            <li>
                                <Link href="#" className="navbar-bottom-link hover-1">Account Setting</Link>
                            </li>

                            <li>
                                <Link href="#" className="navbar-bottom-link hover-1">Sign Out</Link>
                            </li>
                        </ul>
                    </div>

                    <p className="copyright-text">Copyright 2023 © Developed by</p>
                </nav>

                <Link href="https://www.linkedin.com/in/JairoProDev/message/" className="btn btn-primary" target="_blank">Conectemos en LinkedIn</Link>

                <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
                    <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
                </button>
            </div>
        </header>
    )
}