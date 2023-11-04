// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retriveData } from '@/lib/firebase/service';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.query.product[1]);

  const data = await retriveData('products');
  res.status(200).json({ statusCode: 200, status: true, data: data });
}
