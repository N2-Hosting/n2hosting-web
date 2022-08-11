import MetaFacebook from './MetaFacebook';
import MetaGoogle from './MetaGoogle';
import MetaTwitter from './MetaTwitter';

export default function MetaTags({ title, description, image }) {
  return (
    <>
      {/* Google / Search Engine Tags */}
      <MetaGoogle title={title} description={description} image={image} />
      {/* Facebook Meta Tags */}
      <MetaFacebook title={title} description={description} image={image} />
      {/* Twitter Meta Tags */}
      <MetaTwitter title={title} description={description} image={image} />
    </>
  );
}
