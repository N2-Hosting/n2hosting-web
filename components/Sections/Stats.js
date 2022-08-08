export default function StatsSection() {
  return (
    <section className="bg:fade-8 px:15 py:30 py:60@sm py:100@md t:center t:left@md">
      <div className="max-w:md mx:auto">
        <div className="grid-cols:1 grid-cols:3@sm gap:30">
          <div>
            <h4 className="color:blue-60 f:32 f:60@md mb:6">20</h4>
            <p className="color:white f:16 f:20@md lh:1.5">
              Datacenters across different locations.
            </p>
          </div>
          <div>
            <h4 className="color:blue-60 f:32 f:60@md mb:6">100+</h4>
            <p className="color:white f:16 f:20@md lh:1.5">
              Customers building with N2 Hosting.
            </p>
          </div>
          <div>
            <h4 className="color:blue-60 f:32 f:60@md mb:6">99.99%</h4>
            <p className="color:white f:16 f:20@md lh:1.5">
              Guaranteed Uptime SLA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
