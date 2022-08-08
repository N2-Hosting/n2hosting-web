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

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          N2 Hosting - The Affordable web hosting in the Philippines
        </title>
        <meta
          name="description"
          content="The Affordable web hosting in the Philippines"
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
