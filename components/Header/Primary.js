import { Link } from "react-scroll";
import HorizontalWhiteLogo from "../Logo/HorizontalWhite";

export default function PrimaryHeader() {
  return (
    <header className="flex ai:center jc:space-between px:30 py:15">
      <div className="flex ai:center">
        <HorizontalWhiteLogo />
        <picture>
          <img src="/images/ph-flag-icon.png" alt="PH flag" className="abs ml:15 mt:-15" />
        </picture>
        <nav className="ml:60 hidden block@md">
          <ul className="flex mt:15 ai:center ml:30>li">
            <li>
              <Link
                to="features"
                className="f:white color:blue-50:hover font:bold"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                  Features
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                className="f:white color:blue-50:hover font:bold"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                  Pricing
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                className="f:white color:blue-50:hover font:bold"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                  FAQ
              </Link>
            </li>
            {/* <li>
              <Link
                to="contact"
                className="f:white color:blue-50:hover font:bold"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                  Contact Us
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="flex ai:center">
        <a href="https://client.n2hosting.com/index.php?fuse=home&view=login" className="hidden block@3xs rounded bg:blue-50 bg:blue-40:hover px:15 py:6 color:white">Sign In</a>
      </div>
    </header>
  )
}