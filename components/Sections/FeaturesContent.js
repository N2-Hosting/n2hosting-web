export default function FeaturesContent({ color, tab, target, children }) {
  return (
    <div className={`h:full bg:${color} ${tab !== target && 'hidden'}`}>
      {children}
    </div>
  );
}
