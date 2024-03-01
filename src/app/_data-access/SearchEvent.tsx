import { db } from "~/server/db";

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