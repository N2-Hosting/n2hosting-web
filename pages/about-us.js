import Head from 'next/head';
import PageHeader from '../components/Header/PageHeader';
import HeroUnitHeader from '../components/HeroUnit/Header';
import MetaTags from '../components/MetaTag/MetaTags';

export default function AboutUsPage() {
  return (
    <>
      <Head>About N2 Hosting</Head>
      <MetaTags
        title="About N2 Hosting - Superior Web Hosting Performance"
        description="N2 Hosting is a leading provider of web hosting solutions for businesses and individuals."
        image="https://doc-08-64-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/rjjbsk93mg728qpjuq9jhsoolvdtro9a/1660048575000/10076768738487963047/*/1-SfygCWsFXUadok-EmhNZClHN1nrlHpU?uuid=f60582e7-d5b2-4176-9986-e26af6e989a9"
      />
      <HeroUnitHeader />
      <PageHeader
        title={() => (
          <span>
            <span className="color:pink-50">About </span> Us
          </span>
        )}
      />
      <section className="px:20 py:30 py:60@md">
        <div className="w:2xs@md mx:auto">
          <p className="mb:30 lh:1.5">
            N2 Hosting is a leading provider of web hosting solutions for
            businesses and individuals. With a commitment to delivering
            reliable, high-performance hosting services, N2 Hosting has become a
            trusted name in the industry.
          </p>
          <p className="mb:30 lh:1.5">
            Our goal is to provide our clients with the tools and resources they
            need to succeed online. Whether you are just starting out, or you
            are a seasoned professional, we have a solution that is right for
            you.
          </p>
          <p className="mb:30 lh:1.5">
            Our hosting services include shared hosting, VPS hosting, and
            dedicated servers, all of which are designed to meet the specific
            needs of our clients. With 24/7 support, a user-friendly control
            panel, and a range of powerful features and tools, N2 Hosting makes
            it easy to manage your website and achieve your goals.
          </p>
          <p className="mb:30 lh:1.5">
            At N2 Hosting, we believe that our success is directly tied to the
            success of our clients. That's why we work hard every day to deliver
            the best possible hosting experience, and why we are always here to
            support you whenever you need it.
          </p>
        </div>
      </section>

      <section className="px:20 py:30 py:60@md bg:fade-10">
        <div className="w:2xs@md mx:auto">
          <h2 className="mb:30 f:24 f:48@md">
            Our <span className="color:blue-60">Mission</span>
          </h2>
          <p className="mb:30 lh:1.5">
            Our mission is simple: to provide our clients with the best possible
            hosting experience. Whether you need a powerful and reliable hosting
            solution, or you need help and support along the way, we are here
            for you.
          </p>
          <p className="mb:30 lh:1.5">
            We believe that everyone deserves access to high-quality hosting
            services, regardless of their experience level or budget. That's why
            we offer a range of hosting plans that are designed to meet the
            specific needs of our clients, and why we provide 24/7 support to
            help you succeed.
          </p>
          <p className="mb:30 lh:1.5">
            At N2 Hosting, we are committed to delivering the best possible
            service, and we will always do everything in our power to ensure
            that our clients are satisfied with their experience.
          </p>
        </div>
      </section>
    </>
  );
}
