// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid';

type Data = {
  success: boolean
}

interface Interests {
    ctf: boolean,
    lab: boolean,
    pentest: boolean,
    competition: boolean,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const body = req.body;
    const {
      name, matrix, email, grade, interest_ctf,
      interest_lab, interest_pentest, interest_competition
    } = body;

    let interest: Interests = {
        ctf: false,
        lab: false,
        pentest: false,
        competition: false
    };
    
    if (interest_ctf != undefined && interest_ctf != null) {
        interest["ctf"] = true;
    }
    if (interest_lab != undefined && interest_lab != null) {
        interest["lab"] = true;
    }
    if (interest_pentest != undefined && interest_pentest != null) {
        interest["pentest"] = true;
    }
    if (interest_competition != undefined && interest_competition != null) {
        interest["competition"] = true;
    }
    
    const { error } = await supabase
        .from('registration')
        .insert({ id: uuidv4(), name: name, matrix: matrix, grade: grade, interest: interest, email: email});
    if (error != null) {
        res.status(500).json({ success: false });
        console.log(error);
    } else {
        res.status(200).redirect("/success");
    }
}
