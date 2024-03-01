"use client"
import Image from "next/image"
import { AutoComplete } from "./_components/ui/AutoComplete";
import { SchoolModel } from "./_components/ui/SchoolModel";
import { useRouter } from "next/navigation"
import {useEventForm} from "./_components/hooks/useEventForm"



export default function HomePage() {
  const router = useRouter();
  const {location, setLocation, school, setSchool, events, error, handleFormSubmit } = useEventForm(router);
  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={handleFormSubmit}>
          <div className="mt-24">
            <AutoComplete
              onPlaceSubmit={(cityState: string) => {
                setLocation(cityState)
                console.log(cityState)
              }}
            />

          </div>
          <div className="mt-10">
            <h1>Selected State: {location}</h1>
          </div>
          <SchoolModel
            onSchoolSelect={(institution: string) => {
              setSchool(institution)
            }}
          />
          <div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-2xl bg-gray-700 px-4 py-1 mt-10 text-lg"
            >
              Search
            </button>
          </div>
        </form>

      </div>

      <div>
        {error && <p className="text-red-300">{error}</p>}
        <div className="flex justify-center mt-16">
          <h1 className="text-lg">Events in {school}</h1> 
        </div>
        {events.length > 0 && (
          <ul className="mt-20">
            {events.map((event, index) => (
              <div key={index}>
                <div className="flex flex-col items-center mt-20 mb-20">
                  <div className="bg-black p-8 rounded-xl">
                    <Image
                      src={event.image}
                      alt=""
                      width={300}
                      height={300}
                    />
                    <div className="flex flex-col justify-start mt-2">
                      <h1>
                        Title: {event.title}
                      </h1>
                      <h1>
                        Time: {event.time}
                      </h1>
                      <h1>
                        Location: {event.location}
                      </h1>
                      <h1>
                        Attendees: {event.attendees}
                      </h1>
                      <h1>
                        Created At: {event.createdAt}
                      </h1>
                    </div>

                  </div>
                </div>
              </div> // Example: display event titles
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
