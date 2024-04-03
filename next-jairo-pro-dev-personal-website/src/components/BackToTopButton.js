import Link from 'next/link';

export default function BackToTopButton() {
    return (
        <Link href="#top" passHref>
            <button className="back-top-btn" aria-label="back to top">
                <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
            </button>
        </Link>
    );
}