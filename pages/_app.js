import '../styles/globals.css';
import '@master/css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // componentDidMount() {
  //   // grab token value from cookie
  //   const token = Cookie.get("token");

  //   if (token) {
  //     // authenticate the token on the server and place set user object
  //     fetch(`${process.env.NEXT_PUBLIC_API_URL}users/me`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }).then(async (res) => {
  //       // if res comes back not valid, token is not valid
  //       // delete the token and log the user out on client
  //       if (!res.ok) {
  //         Cookie.remove("token");
  //         this.setState({ user: null });
  //         return null;
  //       }
  //       const user = await res.json();
  //       this.setUser(user);
  //     });
  //   }
  // }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
