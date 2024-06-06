import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { name, id } = req.body;

    // Set the cookies
    res.setHeader('Set-Cookie', [
      serialize('name', name, {
        path: '/',
        maxAge: 3600, // Cookie expiration time (in seconds)
      }),
      serialize('id', id, {
        path: '/',
        maxAge: 3600, // Cookie expiration time (in seconds)
      }),
    ]);

    res.status(200).json({ message: 'Cookies set successfully' });
    console.log("cookie set successfully")
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
