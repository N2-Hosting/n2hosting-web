import Link from 'next/link';
import HorizontalWhiteLogo from '../Logo/HorizontalWhite';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PrimaryHeader() {
  const router = useRouter();

  useEffect(() => {
    const sub = router?.query?.sub;
    const elem = document.getElementById(sub);

    const delay = setTimeout(() => {
      elem?.scrollIntoView({ behavior: 'smooth' });
    }, 200);

    return () => {
      clearTimeout(delay);
    };
  }, [router]);

  return (
    <header className="flex ai:center jc:space-between px:30 py:15">
      <div className="flex ai:center">
        <Link href="/">
          <a>
            <HorizontalWhiteLogo />
          </a>
        </Link>
        <picture>
          <img
            src="/images/ph-flag-icon.png"
            alt="PH flag"
            className="abs ml:15 mt:-15"
          />
        </picture>
        <nav className="ml:60 hidden block@md">
          <ul className="flex mt:15 ai:center ml:30>li">
            <li>
              <Link href="/">
                <a className="f:white color:blue-50:hover font:bold">Home</a>
              </Link>
            </li>
            <li>
              <Link
                href="/?sub=features"
                className="f:white color:blue-50:hover font:bold"
              >
                <a className="f:white color:blue-50:hover font:bold">
                  Features
                </a>
              </Link>
            </li>
            <li>
              <Link href="/?sub=pricing">
                <a className="f:white color:blue-50:hover font:bold">Pricing</a>
              </Link>
            </li>
            <li>
              <Link
                href="/?sub=faq"
                className="f:white color:blue-50:hover font:bold"
              >
                <a className="f:white color:blue-50:hover font:bold">FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="contact-us">
                <a className="f:white color:blue-50:hover font:bold">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex ai:center">
        <a
          href="https://client.n2hosting.com/index.php?fuse=home&view=login"
          className="hidden block@3xs rounded bg:blue-50 bg:blue-40:hover px:15 py:6 color:white"
        >
          Sign In
        </a>
      </div>
    </header>
  );
}
