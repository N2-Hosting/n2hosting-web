import Head from 'next/head';
import Image from 'next/image';
import PrimaryHeader from '../components/Header/Primary';
import HeroUnitHeader from '../components/HeroUnit/Header';
import HeroUnitWelcome from '../components/HeroUnit/Welcome';
import FAQSection from '../components/Sections/FAQ';
import FeaturesSection from '../components/Sections/Features';
import FreeSetupSection from '../components/Sections/FreeSetup';
import PricingTable from '../components/Sections/PricingTable';
import StatsSection from '../components/Sections/Stats';
import MetaTags from '../components/MetaTag/MetaTags';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          N2 Hosting - The Affordable web hosting in the Philippines
        </title>
        <MetaTags
          title="N2 Hosting - Superior Web Hosting Performance"
          description="The no. 1 Affordable web hosting in the Philippines with excellent speed and security. Comes with a FREE website setup."
          image="https://doc-08-64-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/rjjbsk93mg728qpjuq9jhsoolvdtro9a/1660048575000/10076768738487963047/*/1-SfygCWsFXUadok-EmhNZClHN1nrlHpU?uuid=f60582e7-d5b2-4176-9986-e26af6e989a9"
        />
      </Head>

      <HeroUnitHeader />
      <HeroUnitWelcome />
      <FeaturesSection />
      <StatsSection />
      <PricingTable />
      <FreeSetupSection />
      <FAQSection />
    </div>
  );
}
