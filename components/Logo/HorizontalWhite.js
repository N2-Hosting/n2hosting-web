import Image from 'next/image';

export default function HorizontalWhiteLogo() {
  return (
    <>
      <picture>
        <source srcSet="/images/logo.png?811202201" type="image/png" />
        <img src="/images/logo.png?811202201" alt="Logo" className="w:200 w:300@md" width={200} />
      </picture>
    </>
  );
}
