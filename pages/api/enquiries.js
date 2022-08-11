export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Invalid request method!' });
    return;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/enquiries`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`
        },
        body: JSON.stringify(req.body)
      }
    );

    res.status(response.status).send(await response.json());
  } catch (e) {
    res.status(405).send(e);
  }
}
