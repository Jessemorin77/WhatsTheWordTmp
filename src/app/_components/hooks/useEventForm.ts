import { useState } from 'react';
import { fetchEvents } from '../../_data-access/services/EventService';

export function useEventForm(router) {
  const [location, setLocation] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((location && school) || (!location && !school)) {
      setError('Please fill in exactly one field');
      setEvents([]);
      router.push('/');
    } else {
      try {
        const returnedEvents = await fetchEvents(school, location);
        console.log('Returned Events', returnedEvents);
        setEvents(returnedEvents);
      } catch (error) {
        console.error(error);
        setError('Failed to load events');
      }
    }
  };

  return {
    location,
    setLocation,
    school,
    setSchool,
    events,
    error,
    handleFormSubmit,
  };
}
