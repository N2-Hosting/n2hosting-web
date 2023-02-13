import PricingListItem from './PricingListItem';

export default function PricingTable() {
  return (
    <section
      id="pricing"
      className="px:15 py:30 py:80@md bg:fade-12 color:gray-74"
    >
      <div className="t:center mb:60 mb:120@md">
        <h2 className="f:24 f:48@md mb:30">
          <span className="color:yellow-80">Pricing</span> Plans.
        </h2>
        <p className="f:16 f:24@md f:light">
          Pick any plan that suites your budget.
        </p>
        <p className="f:16 f:24@md f:light mt:20">
          All plans are{' '}
          <span className="f:18 f:24@md f:bold color:red-60">60%</span> off for
          Today.
        </p>
      </div>
      <div className="max-w:lg mx:auto">
        <div className="grid-cols:1 grid-cols:3@md gap:40">
          <div className="p:30">
            <p className="f:30 f:48@md f:semibold">
              ₱92<span className="f:24">/mo</span>
            </p>
            <p className="f:14 mt:20 color:fade-60">
              Renews next month for ₱230.00/mo
            </p>
            <h3 className="mt:30">Starter</h3>
            <p className="lh:1.5 mt:10 f:14">
              Good for small businesses or school projects.
            </p>
            <a
              href="https://client.n2hosting.com/order.php?step=2&product=1&paymentTerm=1"
              className="mt:30 f:14 f:semibold block rounded t:center color:gray-74 p:12 b:2|solid|fade-30"
            >
              Buy Starter
            </a>
            <ul className="mt:40 grid gap:12">
              <PricingListItem description="1 Website" />
              <PricingListItem description="1 Database" />
              <PricingListItem description="50GB Bandwidth" />
              <PricingListItem description="10GB Storage" />
              <PricingListItem description="FREE SSL" />
              <PricingListItem description="Free 1-click Software install" />
              <PricingListItem description="Asia Optimized Bandwidth" />
              <PricingListItem description="1 Email Account" />
              <PricingListItem description="Free Setup" />
            </ul>
          </div>
          <div className="bg:blue-50 color:gray-90 r:24 p:30">
            <p className="f:30 f:48@md f:semibold">
              ₱139<span className="f:24">/mo</span>
            </p>
            <p className="f:14 mt:30 color:fade-88">
              Renews next month for ₱349.00/mo
            </p>
            <h3 className="mt:20">Professional</h3>
            <p className="lh:1.5 mt:10 f:14">
              Good for medium size businesses and just getting started
              professional.
            </p>
            <a
              href="https://client.n2hosting.com/order.php?step=2&product=2&paymentTerm=1"
              className="mt:30 f:14 f:semibold block bg:white rounded t:center color:fade-4 p:12 b:2|solid|white"
            >
              Buy Professional
            </a>
            <ul className="mt:40 grid gap:12">
              <PricingListItem iconColor="white" description="1 Website" />
              <PricingListItem iconColor="white" description="10 Database" />
              <PricingListItem
                iconColor="white"
                description="100GB Bandwidth"
              />
              <PricingListItem iconColor="white" description="20GB Storage" />
              <PricingListItem iconColor="white" description="FREE SSL" />
              <PricingListItem
                iconColor="white"
                description="Free 1-click Software install"
              />
              <PricingListItem description="Asia Optimized Bandwidth" />
              <PricingListItem description="3 Email Accounts " />
              <PricingListItem description="Free Setup" />
            </ul>
          </div>
          <div className="p:30">
            <p className="f:30 f:48@md f:semibold">
              ₱239<span className="f:24">/mo</span>
            </p>
            <p className="f:14 mt:20 color:fade-60">
              Renews next month for ₱599.00/mo
            </p>
            <h3 className="mt:30">Business</h3>
            <p className="lh:1.5 mt:10 f:14">
              Unmetered resources, good for big size business.
            </p>
            <a
              href="https://client.n2hosting.com/order.php?step=2&product=4&paymentTerm=1"
              className="mt:30 block f:14 f:semibold rounded t:center color:gray-74 p:12 b:2|solid|fade-30"
            >
              Buy Business
            </a>
            <ul className="mt:40 grid gap:12">
              <PricingListItem description="UNLIMITED Website" />
              <PricingListItem description="UNLIMITED Database" />
              <PricingListItem description="UNMETERED Bandwidth" />
              <PricingListItem description="80GB Storage" />
              <PricingListItem description="FREE SSL" />
              <PricingListItem description="Daily Backups" />
              <PricingListItem description="Free 1-click Software install" />
              <PricingListItem description="Asia Optimized Bandwidth" />
              <PricingListItem description="UNLIMITTED Email Accounts" />
              <PricingListItem description="Free Setup" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
