import Link from 'next/link';

export default function FreeSetupSection() {
  return (
    <section className="px:15 py:30 py:100@md bg:fade-8 color:white ">
      <div className="max-w:md mx:auto grid-cols:1 gap:30 gap:15@md grid-cols:2@md ai:center t:center t:left@md">
        <div>
          <h2 className="f:24 f:48@md mb:30">
            <span className="color:pink-50">Free</span> Website Setup
          </h2>
          <p className="f:16 f:24@md f:light lh:1.5">
            {"Don't have time to setup your website ?"}
            <span className="block@md">
              we can help you create your dream website for FREE!.
            </span>
          </p>
        </div>
        <div className="t:right@md">
          <Link href="/contact-us">
            <a className="inline-block px:30 px:60@md py:12 py:24@md f:16 f:20@md f:bold bg:pink-50 bg:pink-30:hover color:white r:30 r:60@md">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
