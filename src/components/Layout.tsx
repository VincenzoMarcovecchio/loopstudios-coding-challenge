import Head from 'next/head';
import Navigation from './Navigation';
import Copyright from '../components/Copyright';
import { SocialList } from '../components/SocialList';
type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <style jsx>
        {`
          nav {
            position: absolute;
            top: 0;
            left: 0;
            height: 8rem;
            z-index: 3;
            padding: 2rem 5%;
          }
          main,
          nav {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 0 auto;
          }

          @media (min-width: 769px) {
            main,
            nav {
              display: flex;
              flex-direction: column;
              padding: 0 10%;
            }
          }
        `}
      </style>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <footer>
        <img src="./images/logo.svg" alt="loopstudios" />
        <ul className="links-footer">
          <li>
            <a rel="noopener noreferrer " target="_blank">
              About
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer " target="_blank">
              Carrers
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer " target="_blank">
              Events
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer " target="_blank">
              Products
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer " target="_blank">
              Support
            </a>
          </li>
        </ul>
        <SocialList />
        <Copyright />
      </footer>
    </>
  );
}
