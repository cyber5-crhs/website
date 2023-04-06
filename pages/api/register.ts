// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid';

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const query = req.query;
    const { name, matrix, email, grade, interest } = query;
    const { error } = await supabase
        .from('registration')
        .insert({ id: uuidv4(), name: name, matrix: matrix, grade: grade, interest: interest, email: email});
    if (error != null) {
        res.status(500).json({ success: false })
        console.log(error);
    } else {
        res.status(200).json({ success: true })
    }
}
