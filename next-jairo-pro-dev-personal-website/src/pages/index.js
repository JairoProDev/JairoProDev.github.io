import Head from "next/head";
import MiHeader from "../components/MiHeader";
// import HeroSection from "../components/HeroSection";
// import BackToTopButton from "../components/BackToTopButton";
// import CursorAnimation from "../components/CursorAnimation";
// import DeepEssays from "../components/DeepEssays";
// import Footer from "../components/Footer";
// import Main from "../components/Main";
// import Posts from "../components/Posts";
// import Proyectos from "../components/Proyectos";
// import TeachingSkills from "../components/TeachingSkills";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* primary meta tags */}
        <title>Jairo Saul Pro Dev</title>
        <meta
          name="title"
          content="JairoSaulProDev - Founder & Software Developer"
        />
        <meta
          name="description"
          content="Jairo Saul Pro Dev - Founder & Software Developer"
        />
        <meta
          name="keywords"
          content="Jairo Saul Salas Quiñones, Startups, Pro Dev, Sci Tech, Founder, Software Developer, Development, Programador Full Stack, ciencia, tecnología"
        />
        <meta
          name="description"
          content="Startups | Programación | Educación | Crecimiento Profesional | Desarrollo personal | Ciencia | Tecnología"
        />

        {/* favicon */}
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />

        {/* google font link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* custom css link */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/cursor-animated.css" />

        {/* preload images */}
        <link rel="preload" as="image" href="/assets/images/hero-banner.png" />
        <link rel="preload" as="image" href="/assets/images/pattern-2.svg" />
        <link rel="preload" as="image" href="/assets/images/pattern-3.svg" />
      </Head>
      <MiHeader />
      <main>
        {/* <article>
        <HeroSection />
        <BackToTopButton />
        <CursorAnimation />
        <DeepEssays />
        <Footer />
        <Main />
        <Posts />
        <Proyectos />
        <TeachingSkills />
        </article> */}
      </main>
    </div>
  );
}
