export default function MetaGoogle({ title, description, image }) {
  return (
    <>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={description} />
    </>
  );
}
