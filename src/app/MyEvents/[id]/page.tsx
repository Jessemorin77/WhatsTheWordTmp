import { getEventById } from "~/app/_data-access/events"

export default async function EditEvent({params}: {params: {id: number}}) {
  const event = await getEventById(Number(params.id)); 
  return(
    <div>
      <form>
      <div className="border rounded-xl">
         <div>
            <h2>
              {event.title}
            </h2>
            <input name="title"/>
         </div> 
         <div>
            <h2>
              {event?.eventType}
            </h2>
            <input type="text" name="eventType"/>
         </div>
      </div>
      </form>
    </div>
  )
}
