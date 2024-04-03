// PostCard.js
import Link from 'next/link';

export default function PostCard({ imgSrc, title, readTime, date }) {
    return (
        <div className="popular-card">
            <figure className="card-banner img-holder" style={{width: '64px', height: '64px'}}>
                <img src={imgSrc} width="64" height="64" loading="lazy" alt={title} className="img-cover" />
            </figure>

            <div className="card-content">
                <h4 className="headline headline-4 card-title">
                    <Link href="#" className="link hover-2">{title}</Link>
                </h4>

                <div className="warpper">
                    <p className="card-subtitle">{readTime} mins read</p>
                    <time className="publish-date" datetime="2022-04-15">{date}</time>
                </div>
            </div>
        </div>
    );
}