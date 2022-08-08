export default function FeaturesItem({
  color,
  highlightTitle,
  title,
  description,
  isActive,
  onClick
}) {
  const highlight = color || 'white';
  return (
    <div
      className={`px:20 py:30 bg:fade-12@media(max-width:1024px) bg:fade-12:hover@md r:15@@media(max-width:1024px) rl:8@md cursor:pointer ${
        isActive && 'bg:fade-12'
      }`}
      onClick={onClick}
    >
      <h3 className={`mb:15 f:18 f:24@md f:bold`}>
        <span className={`color:${highlight}`}>{highlightTitle}</span> {title}
      </h3>
      <p className="lh:1.5 f:14 f:16@md f:light">{description}</p>
    </div>
  );
}
