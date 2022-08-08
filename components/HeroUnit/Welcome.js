import BgElevator from './BgElevator';

export default function HeroUnitWelcome() {
  return (
    <>
      <section
        id="hero"
        className="rel overflow:hidden bg:fade-10 h:2xs h:sm@md flex flex:col ai:center jc:center color:white t:center px:15 pt:30"
      >
        <h1 className="f:36 f:72@md ml:15>span mb:30 font:bold">
          <span className="">Superior</span>
          <span className="color:blue-50">Web Hosting</span>
          <br />
          <span className="color:yellow-80">Performance.</span>
        </h1>
        <p className="f:18 f:light f:20@md lh:1.5">
          The Affordable web hosting in the{' '}
          <span className="f:bold">Philippines</span> with excellent speeds and
          security.
        </p>
        <BgElevator />
      </section>
    </>
  );
}
