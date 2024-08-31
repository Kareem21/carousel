import React from 'react';
import '../styles/About.css';
import '../styles/App.css';
import "@fontsource/playfair-display/600.css"; // Specify weight

const AboutPage = () => {
    const timelineEvents = [
        { year: 1972, event: "Charlotte Dinger makes her first purchase of a carousel horse from an antique store in Philadelphia." },
        { year: 1973, event: "Dinger begins restoring carousel horses, starting with a small wooden horse." },
        { year: 1975, event: "Discovers a trove of two dozen carousel horses in a Philadelphia warehouse." },
        { year: 1980, event: "Puts together a traveling exhibition that is displayed at museums across the country." },
        { year: 1985, event: "Becomes a consultant to Sotheby's and publishes 'ART OF THE CAROUSEL'." },
        { year: 1996, event: "Charlotte Dinger passes away, but her collection continues to be showcased across the nation." },
        { year: 2000, event: "Her collection is featured in various traveling shows, maintaining her legacy." }
    ];

    return (
        <>
            <div className="page-content">
                <div className="layout-grid">
                    <section className="timeline-section">
                        <h2>The Legacy of Charlotte Dinger</h2>
                        <div className="timeline">
                            {timelineEvents.map((event, index) => (
                                <div key={index} className="timeline-event">
                                    <div className="timeline-year">{event.year}</div>
                                    <div className="timeline-description">{event.event}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="about">
                        <h2>The Carousel World Story</h2>
                        <div className="story-grid">
                            <div className="story-item">
                                <div className="text-content">
                                    <p>
                                        In 1972 Charlotte H. Dinger, paid a chance visit to a Philadelphia
                                        antiques shop, and walked out with the foundation of an unlikely
                                        collection, and an even less likely career. She came to be known as
                                        one of the world's leading collectors, and foremost authorities on
                                        antique carousels and carousel art.
                                        {/* Continue with the rest of the text */}
                                    </p>
                                </div>
                                <img src="/Aboutus/granda.gif" alt="Carousel"/>
                            </div>
                            <div className="story-item">
                                <div className="text-content">
                                    <p>
                                        The second experience came during a 1972 visit to the antique
                                        store, where she encountered an old and faded carousel horse. For
                                        all its neglect and disrepair it evoked a strong and powerful
                                        nostalgic recollection of her bright childhood fascination, so she
                                        paid $75 on the spot...
                                    </p>
                                </div>
                                <img src="/Aboutus/blackwhite.jpg" alt="Carousel"/>
                            </div>
                            <div className="story-item">
                                <div className="text-content">
                                    <p>
                                        The second experience came during a 1972 visit to the antique
                                        store, where she encountered an old and faded carousel horse. For
                                        all its neglect and disrepair it evoked a strong and powerful
                                        nostalgic recollection of her bright childhood fascination, so she
                                        paid $75 on the spot...
                                    </p>
                                </div>
                                <img src="/Aboutus/blackwhite.jpg" alt="Carousel"/>
                            </div>
                            <div className="story-item">
                                <div className="text-content">
                                    <p>
                                        The second experience came during a 1972 visit to the antique
                                        store, where she encountered an old and faded carousel horse. For
                                        all its neglect and disrepair it evoked a strong and powerful
                                        nostalgic recollection of her bright childhood fascination, so she
                                        paid $75 on the spot...
                                    </p>
                                </div>
                                <img src="/Aboutus/blackwhite.jpg" alt="Carousel"/>
                            </div>
                            <div className="story-item">
                                <div className="text-content">
                                    <p>
                                        The second experience came during a 1972 visit to the antique
                                        store, where she encountered an old and faded carousel horse. For
                                        all its neglect and disrepair it evoked a strong and powerful
                                        nostalgic recollection of her bright childhood fascination, so she
                                        paid $75 on the spot...
                                    </p>
                                </div>
                                <img src="/Aboutus/blackwhite.jpg" alt="Carousel"/>
                            </div>
                            <div className="story-item">
                                <div className="text-content">
                                    <p>
                                        The second experience came during a 1972 visit to the antique
                                        store, where she encountered an old and faded carousel horse. For
                                        all its neglect and disrepair it evoked a strong and powerful
                                        nostalgic recollection of her bright childhood fascination, so she
                                        paid $75 on the spot...
                                    </p>
                                </div>
                                <img src="/Aboutus/blackwhite.jpg" alt="Carousel"/>
                            </div>
                            <div className="story-item">
                                <div className="text-content">
                                    <p>
                                        The second experience came during a 1972 visit to the antique
                                        store, where she encountered an old and faded carousel horse. For
                                        all its neglect and disrepair it evoked a strong and powerful
                                        nostalgic recollection of her bright childhood fascination, so she
                                        paid $75 on the spot...
                                    </p>
                                </div>
                                <img src="/Aboutus/blackwhite.jpg" alt="Carousel"/>
                            </div>
                            <div className="story-item">
                                <div className="text-content">
                                    <p>
                                        The second experience came during a 1972 visit to the antique
                                        store, where she encountered an old and faded carousel horse. For
                                        all its neglect and disrepair it evoked a strong and powerful
                                        nostalgic recollection of her bright childhood fascination, so she
                                        paid $75 on the spot...
                                    </p>
                                </div>
                                <img src="/Aboutus/blackwhite.jpg" alt="Carousel"/>
                            </div>
                            {/* Add additional story items here */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
