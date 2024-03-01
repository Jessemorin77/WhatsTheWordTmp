import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export async function getAllEvents(){
  const session = await getServerAuthSession();
return(
   db.event.findMany({
    where:{
      hostId: session?.user.id  
    }
  })
)
}

export async function getEventById(id: number){
  return (
    db.event.findUnique({
      where:{
        id: id
      }
    })
  )
}

export function getSearchEvent(location: string, school: string ){
  return(
    db.event.findMany({
      where: {
        AND: [
          location ? { cityState: String(location) } : {},
          school ? { school: String(school) } : {},
        ],
        status: "active", // Filter for active events
      },
      include: {
        host: true,
        // Include other necessary relations here
      },
    })
  )
}