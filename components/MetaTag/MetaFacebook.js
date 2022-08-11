export default function MetaFacebook({ title, description, image }) {
  return (
    <>
      <meta property="og:url" content="https://n2hosting.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </>
  );
}
