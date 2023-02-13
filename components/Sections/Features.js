import { useState } from 'react';
import FeaturesContent from './FeaturesContent';
import FeaturesItem from './FeaturesItem';

export default function FeaturesSection() {
  const [tab, setTab] = useState('tab1');

  function handleTabClick(tab) {
    setTab(tab);
  }

  return (
    <section
      id="features"
      className="px:15 py:30 py:80@md bg:fade-8 color:gray-74 overflow:hidden">
      <div className="t:center mb:30 mb:120@md">
        <h2 className="f:24 f:48@md mb:30">
          <span className="color:pink-50">Everything</span> you need to run your
          sites.
        </h2>
        <p className="f:16 f:24@md f:light">
          We offer everything you need to run your sites with high quality
          services.
        </p>
      </div>

      <div className="max-w:md mx:auto">
        <div className="grid-cols:1 grid-cols:12@md">
          <div className="grid-cols:1 grid-cols:2@sm grid-cols:1@md gap:15 grid-col-span:6@md pt:80@md">
            <FeaturesItem
              color="grass-60"
              highlightTitle="Easy To Install"
              title="Software"
              description="Focus on managing your apps rather than spending time
        installing them."
              isActive={tab === 'tab1'}
              onClick={() => {
                handleTabClick('tab1');
              }}
            />
            <FeaturesItem
              color="orange-60"
              highlightTitle="Up-to-date"
              title="Tools for Development"
              description="Build your sites with our up-to-date tools for development."
              isActive={tab === 'tab2'}
              onClick={() => {
                handleTabClick('tab2');
              }}
            />
            <FeaturesItem
              color="grass-60"
              highlightTitle="Free"
              title="SSL"
              description="We offer 100% FREE SSL! no hidden charges!."
              isActive={tab === 'tab3'}
              onClick={() => {
                handleTabClick('tab3');
              }}
            />
            <FeaturesItem
              color="orange-60"
              highlightTitle="Ultimate"
              title="Security"
              description="Remove and monitor threats with our powerful security tool. Blocks 99.9% of threats."
              isActive={tab === 'tab4'}
              onClick={() => {
                handleTabClick('tab4');
              }}
            />
          </div>
          <div className="grid-col-span:6 hidden block@md">
            <div className="overflow:hidden w:lg bg:fade-12 r:8">
              <FeaturesContent color="grass-60" tab={tab} target="tab1">
                <picture>
                  <img
                    src="//drive.google.com/uc?id=10gB1N9jzvu9osTiI0xSRromBTcynvdbl"
                    alt=""
                    className="w:full"
                  />
                </picture>
              </FeaturesContent>
              <FeaturesContent color="orange-60" tab={tab} target="tab2">
                <picture>
                  <img
                    src="//drive.google.com/uc?id=1Dqe4nK1U0kBGbm9KbmaK3wJAYtBcAWUD"
                    alt="Up-to-date Tools"
                    className="w:full"
                  />
                </picture>
              </FeaturesContent>
              <FeaturesContent color="grass-60" tab={tab} target="tab3">
                <picture>
                  <img
                    src="//drive.google.com/uc?id=1DmI0ZRr67XdPPnZ1bbHRVYTm1r35jxd2"
                    alt=""
                    className="w:full"
                  />
                </picture>
              </FeaturesContent>
              <FeaturesContent color="orange-60" tab={tab} target="tab4">
                <picture>
                  <img
                    src="//drive.google.com/uc?id=12rDInCRJS5OzwjZVCty_5sYFAVueLt_3"
                    alt=""
                    className="w:full"
                  />
                </picture>
              </FeaturesContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
