import React from 'react';
import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import JsonLdMeta from '../components/meta/JsonLdMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';

export default function Index() {
  return (
    <Layout>
      <BasicMeta
        url={`/`}
        title={'Frontend web development'}
        keywords={['keywords', 'frontend', 'challenge']}
        description={
          'A frontendmentor challenge completed by Vincenzo Marcovecchio'
        }
      />
      <TwitterCardMeta
        url={`/`}
        title={'Frontend web development'}
        description={
          'A frontendmentor challenge completed by Vincenzo Marcovecchio'
        }
      />
      <OpenGraphMeta
        url={`/`}
        title={'Frontend web development'}
        description={
          'A frontendmentor challenge completed by Vincenzo Marcovecchio'
        }
      />
      <JsonLdMeta
        url={`/`}
        title={'Frontend web development'}
        date={new Date(Date.now())}
        keywords={['web', 'development']}
        author={'Vincenzo Marcovecchio'}
        description={
          'A frontendmentor challenge completed by Vincenzo Marcovecchio'
        }
      />

      <section>
        <picture>
          <source
            srcSet={`./images/desktop/image-hero.jpg`}
            media="(min-width: 769px)"
          />
          <img
            alt="the challenge"
            width="100% "
            height="100%"
            className="hero-image"
            src={`./images/mobile/image-hero.jpg`}
          />
        </picture>
        <h1> Immersive experiences that deliver</h1>
      </section>
      <section>
        <picture>
          <source
            srcSet={`./images/desktop/image-interactive.jpg`}
            media="(min-width: 769px)"
          />
          <img
            width="100%"
            height="100%"
            alt="the challenge"
            className="interactive-image"
            src={`./images/mobile/image-interactive.jpg`}
          />
        </picture>
        <div className="text-container">
          <h2> The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section>
        <h2> our creations</h2>
        <div className="grid-container">
          <div>
            <picture>
              <source
                srcSet={`./images/desktop/image-deep-earth.jpg`}
                media="(min-width: 769px)"
              />
              <img
                width="100%"
                height="100%"
                alt="the challenge"
                className="grid-image"
                src={`./images/mobile/image-deep-earth.jpg`}
              />
            </picture>
            <span>deep earth</span>
          </div>
          <div>
            <picture>
              <source
                srcSet={`./images/desktop/image-night-arcade.jpg`}
                media="(min-width: 769px)"
              />
              <img
                width="100%"
                height="100%"
                alt="the challenge"
                className="grid-image"
                src={`./images/mobile/image-night-arcade.jpg`}
              />
            </picture>
            <span>night arcade</span>
          </div>
          <div>
            <picture>
              <source
                srcSet={`./images/desktop/image-soccer-team.jpg`}
                media="(min-width: 769px)"
              />
              <img
                width="100%"
                height="100%"
                alt="the challenge"
                className="grid-image"
                src={`./images/mobile/image-soccer-team.jpg`}
              />
            </picture>
            <span>soccer team vr </span>
          </div>
          <div>
            <picture>
              <source
                srcSet={`./images/desktop/image-grid.jpg`}
                media="(min-width: 769px)"
              />
              <img
                width="100%"
                height="100%"
                alt="the challenge"
                className="grid-image"
                src={`./images/mobile/image-grid.jpg`}
              />
            </picture>
            <span>the grid </span>
          </div>
          <div>
            <picture>
              <source
                srcSet={`./images/desktop/image-from-above.jpg`}
                media="(min-width: 769px)"
              />
              <img
                width="100%"
                height="100%"
                alt="the challenge"
                className="grid-image"
                src={`./images/mobile/image-from-above.jpg`}
              />
            </picture>
            <span>from up above vr </span>
          </div>
          <div>
            <picture>
              <source
                srcSet={`./images/desktop/image-pocket-borealis.jpg`}
                media="(min-width: 769px)"
              />
              <img
                width="100%"
                height="100%"
                alt="the challenge"
                className="grid-image"
                src={`./images/mobile/image-pocket-borealis.jpg`}
              />
            </picture>
            <span>pocket borealis </span>
          </div>
          <div>
            <picture>
              <source
                srcSet={`./images/desktop/image-curiosity.jpg`}
                media="(min-width: 769px)"
              />
              <img
                width="100%"
                height="100%"
                alt="the challenge"
                className="grid-image"
                src={`./images/mobile/image-curiosity.jpg`}
              />
            </picture>
            <span>the curiosity </span>
          </div>
          <div>
            <picture>
              <source
                srcSet={`./images/desktop/image-fisheye.jpg`}
                media="(min-width: 769px)"
              />
              <img
                width="100%"
                height="100%"
                alt="the challenge"
                className="grid-image"
                src={`./images/mobile/image-fisheye.jpg`}
              />
            </picture>
            <span>make it fisheye </span>
          </div>
        </div>
        <button>see all</button>
      </section>
    </Layout>
  );
}
