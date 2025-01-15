'use client';

import { useFormStatus } from 'react-dom';

export default function TravelFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share Travel'}
    </button>
  );
}