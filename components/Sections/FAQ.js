export default function FAQSection() {
  return (
    <section
      id="faq"
      className="px:15 py:30 py:100@md bg:fade-12 color:gray-74">
      <h1 className="t:center f:24 f:40@md mb:30">
        Frequently asked <span className="color:grass-60">questions</span>
      </h1>
      <p className="t:center f:16 f:24@md f:light lh:1.5">
        Everything you need to know
      </p>

      <div className="max-w:md mx:auto grid-cols:1 grid-cols:2@md gap:30 mt:30 mt:80@md">
        <div className="bg:fade-8 p:30 r:15">
          <h3 className="mb:15 f:14 f:18@md">What is Web Hosting ?</h3>
          <p className="f:light f:14 f:16@md lh:1.5">
            Web hosting is a service we provided that sell or lease space on a
            server where you store the files that make your website accessible
            on the internet. We offer the facilities required for you (clients)
            to create and maintain a site and makes it accessible on the World
            Wide Web.
          </p>
        </div>
        <div className="bg:fade-8 p:30 r:15">
          <h3 className="mb:15 f:14 f:18@md">
            What payment methods are accepted?
          </h3>
          <p className="f:light f:14 f:16@md lh:1.5">
            We accept Bank Transfer via Instapay, PayMaya, Coins and Gcash.
          </p>
        </div>
        <div className="bg:fade-8 p:30 r:15">
          <h3 className="mb:15 f:14 f:18@md">
            Do you offer free website build?
          </h3>
          <p className="f:light f:14 f:16@md lh:1.5">
            We offer free website setup to all of our plans however we can only
            offer you a basic websites e.g. Blog, E-commerce.
          </p>
        </div>
        <div className="bg:fade-8 p:30 r:15">
          <h3 className="mb:15 f:14 f:18@md">Do you offer free domain?</h3>
          <p className="f:light f:14 f:16@md lh:1.5">
            We offer free domains for every new hosting plan purchase. We
            provide free .com domain for a 1 year plan.
          </p>
        </div>
      </div>
    </section>
  );
}
