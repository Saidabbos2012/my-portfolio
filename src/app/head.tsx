// app/head.tsx
export default function Head() {
    const keywords = [
        // English
        "frontend developer",
        "website development",
        "responsive web design",
        "Next.js",
        // Uzbek
        "veb-sayt yaratish",
        "website tayyorlash",
        "frontend dasturchi",
        // Russian
        "разработка сайтов",
        "создание веб-сайта",
        "адаптивный дизайн",
    ].join(", ");

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Saidabbos Saidikromov",
        "url": "https://your-domain.com", // <-- change to your domain
        "sameAs": [
            // optional: add your social profiles
            "https://github.com/yourusername",
            "https://www.linkedin.com/in/yourprofile"
        ],
        "jobTitle": "Frontend Developer",
        "description": "Frontend developer creating modern, responsive, and SEO-friendly websites."
    };

    return (
        <>
            {/* Multilingual keywords (helps Bing/Yandex/other engines) */}
            <meta name="keywords" content={keywords} />

            {/* Open Graph (redundant to metadata.openGraph but safe to include) */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Website Development | Saidabbos Saidikromov" />
            <meta property="og:description" content="I build modern, responsive websites — Website development, responsive design, React & Next.js." />
            <meta property="og:url" content="https://your-domain.com" />
            <meta property="og:image" content="https://your-domain.com/og-image.jpg" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Website Development | Saidabbos Saidikromov" />
            <meta name="twitter:description" content="I build modern, responsive websites — Website development, responsive design, React & Next.js." />
            <meta name="twitter:image" content="https://your-domain.com/og-image.jpg" />

            {/* Structured data (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Google Search Console verification (only if Google asks for it) */}
            {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
        </>
    );
}