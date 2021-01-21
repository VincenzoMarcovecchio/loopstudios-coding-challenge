import { useRouter } from 'next/router';
import Burger from './Burger';
import { useState } from 'react';

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={active ? 'active navbar__container' : 'navbar__container'}
      >
        <img src="./images/logo.svg" alt="loopstudios" />{' '}
        <Burger active={active} onClick={() => setActive(!active)} />
        <ul>
          <li>
            <a
              rel="noopener noreferrer "
              target="_blank"
              className={router.pathname === '/' ? 'active' : null}
            >
              About
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer "
              target="_blank"
              className={
                router.pathname.startsWith('/carrers') ? 'active' : null
              }
            >
              Carrers
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer "
              target="_blank"
              className={
                router.pathname.startsWith('/events') ? 'active' : null
              }
            >
              Events
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer "
              target="_blank"
              className={
                router.pathname.startsWith('/products') ? 'active' : null
              }
            >
              Products
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer "
              target="_blank"
              className={
                router.pathname.startsWith('/support') ? 'active' : null
              }
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
