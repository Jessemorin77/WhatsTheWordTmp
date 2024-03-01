import Link from "next/link";
import { getAllEvents } from "../_data-access/events";
import { deleteEventAction, editEventAction } from "../action"
import Image from "next/image";
export default async function MyEvents() {
  const events = await getAllEvents();

  return (
    <div>
      <div className="flex justify-center items-center p-4">
        <h1 className="text-3xl">HostEvent</h1>
      </div>
      <Link href="/MyEvents/HostEvent" className="btn">Create Event</Link>
      <h1>My Events:</h1>
      <div className="flex flex-col justify-center items-center border mx-60 rounded-xl" >
        {events.map((event) => (
          <div>
            <Link href={`/MyEvents/${event.id}`}>
              <div key={event.id}>
                <Image
                  src={event?.image}
                  width={200}
                  height={200}
                  alt="image not found"
                />
                <div>
                  <h1>
                    Title:
                    <span>{event.title}</span>
                  </h1>
                </div>
                <div>{event.description}</div>
                <div>{event.time}</div>
                <div>{event.location}</div>
                <div>{event.eventType}</div>
                <div>{event.cityState}</div>
                <div>{event.status}</div>
                <div>{event.school}</div>
              </div>

            </Link>

          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <form action={deleteEventAction}>
          <button className="btn">Delete</button>
        </form>
        <form action={editEventAction}>
          <button className="btn" >Edit</button>
        </form>
      </div>
    </div>
  )
}
