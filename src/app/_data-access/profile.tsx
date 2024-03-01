import { GetServerSideProps } from 'next';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

export async function getProfileData(){
  const session = await getServerAuthSession();
    return(
        db.user.findUnique({
            where: {
                id: session?.user.id
            }
        })        
    )    
}