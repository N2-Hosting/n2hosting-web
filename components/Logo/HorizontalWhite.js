import Image from 'next/image';

export default function HorizontalWhiteLogo() {
  return (
    <>
      <picture>
        <source srcSet="/images/logo.png" type="image/png" />
        <img src="/images/logo.png" alt="Logo" className="w:200 w:300@md" />
      </picture>
    </>
  );
}
