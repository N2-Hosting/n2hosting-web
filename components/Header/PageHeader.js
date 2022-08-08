export default function PageHeader({ title }) {
  return (
    <div className="h:180 h:3xs@md bg:fade-10 flex ai:center text:center">
      <h1 className="w:full f:36 f:72@md mt:100 mt:120@md">{title()}</h1>
    </div>
  );
}
