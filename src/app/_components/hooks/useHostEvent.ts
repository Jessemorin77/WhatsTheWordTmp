
import { useState } from 'react';

export function useHostEvent() {
  const [cityState, setCityState] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  
}
