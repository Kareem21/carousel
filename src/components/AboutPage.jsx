import React from 'react';
import '../styles/About.css';
import '../styles/App.css';
import "@fontsource/playfair-display/600.css";

const AboutPage = () => {
  return (
      <div className="about-page">
        <div className="page-content">
          <h1 className="section-title">Our Story</h1>
          <div className="decorative-line"></div>

          <section className="story-section">
            <div className="image-container">
              <img src="/Aboutus/granda.gif" alt="Charlotte Dinger with carousel horse" className="story-image"/>
            </div>
            <p>
              In 1972 Charlotte H. Dinger, paid a chance visit to a Philadelphia antiques shop, and walked out with the
              foundation of an unlikely collection, and an even less likely career. She came to be known as one of the
              world's leading collectors, and foremost authorities on antique carousels and carousel art. The second
              experience came during a 1972 visit to the antique store, where she encountered an old and faded carousel
              horse. For all its neglect and disrepair it evoked a strong and powerful nostalgic recollection of her
              bright childhood fascination, so she paid $75 on the spot... </p>
          </section>

          <div className="decorative-line"></div>

          <section className="story-section">
            <p>
              After bringing the many pieces of the small wooden horse home, she began stripping away the successive
              layers of thick paint. The obscured delicate carved features soon began to show. Her childhood fascination
              was well on the way to becoming a full-blown adult obsession. </p>
            <div className="image-container">
              <img src="/Aboutus/blackwhite.jpg" alt="Vintage carousel horses" className="story-image"/>
            </div>
          </section>

          <div className="decorative-line"></div>

          <section className="story-section">
            <p>
              Inspired by her initial purchase, Mrs. Dinger soon tracked down what she realized was a treasure trove of
              two dozen carousel horses. They were stacked like so much firewood in a Philadelphia warehouse. Their next
              destination was the Dinger's garage. By this time Charlotte Dinger was in full swing. Figures that had
              been stripped from thousands of carousels from the turn of the century were now recognized as valuable
              examples of neglected art. Charlotte Dinger was in the midst of rescuing many of these wonderful steeds.

            </p>
          </section>

          <div className="decorative-line"></div>

          <section className="story-section">
            <div className="image-container">
              <img src="/Aboutus/blackwhite.jpg" alt="Charlotte Dinger restoring a carousel horse"
                   className="story-image"/>
            </div>
            <p>
              Her husband Carl, only mildly irritated at the loss of space for the family cars, could hardly complain.
              He, too, was a collector, but then again his collection of baseball cards did not require repeated
              additions to the couple's home. Over the next two decades Mrs. Dinger tracked down, bought and restored
              scores of horses, and other carousel figures. She became familiar with the history of the American
              carousel, from its beginnings in 1867 with the work of a German immigrant, Gustav Dentzel, until its
              decline after the introduction of the automobile, and its abrupt demise during the Depression of the 1930s

            </p>
          </section>

          <div className="decorative-line"></div>

          <section className="story-section">
            <p>
              In time she became an expert in the subtle distinctions in the work of such carousel masters as Charles
              Loof, (known for friendly, smiling steeds) Sol Stein and Harry Goldstein (creators of the Central Park
              Carousel.) and many other great carvers.

            </p>
          </section>

          <div className="decorative-line"></div>

          <section className="story-section">
            <p>
              She helped found the American Carousel Society to spread the word among other collectors and carousel
              lovers. Later she became a consultant to Sothebys, and also started her own publishing company to produce
              the definitive coffee table book, " ART OF THE CAROUSEL ". When her collection threatened to outstrip the
              capacity of her home, she put together a traveling exhibition that was on display at museums across the
              country.

            </p>
          </section>

          <div className="decorative-line"></div>

          <section className="story-section">
            <p>
              Other collectors, recognized that antique carousel figures were not merely curiosities, but examples of an
              important American folk art. The prices of choice specimens soared to astronomical levels, as much as
              $175,000 for a single carving. Since her death in 1996, The Charlotte Dinger Collection still endures, and
              can be seen in various traveling shows across the nation. Anyone who hasnt seen some of this collection in
              person, may have caught a glimpse of a few of her prize pieces in the family mail. The United States
              Postal Service has twice used Mrs. Dinger's collection as the basis for an issue of commemorative stamps
              depicting carousel animals. Despite her interest in collecting individual carousel figures, Mrs. Dinger
              campaigned to keep the dwindling supply of working carousels intact. ( According to the American Carousel
              Society, which estimates there were once 3,000 to 6,000 carousels in the country, from the famous Flying
              Horses on Marthas Vineyard, where children still ride on the oldest American carousel, assembled in 1884,
              to the last carousels produced in the1920s.) There are now only 133 left.

            </p>
          </section>
          <div className="decorative-line"></div>

          <section className="story-section">
            <p>
              With all her instincts as a collector, and her appreciation of carousels and carousel art, she has preserved a legacy for the future. Charlotte Dinger did realized her childhood dream The Fairy Tale Experience Of Whirling Around On A Beautiful Carousel.



            </p>
          </section>
        </div>
      </div>
  );
};

export default AboutPage;