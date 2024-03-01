export async function fetchEvents(school: string, location: string){
  const response = await fetch('/api/events', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ school, location })
  })

  if(!response.ok) throw new Error('Failed to fetch events');

  return response.json();
}
