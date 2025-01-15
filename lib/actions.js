'use server';

import { redirect } from 'next/navigation';

import { saveTravel } from './travel';

export async function shareTravel(formData) {
  const travel = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('highlights'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  await saveTravel(travel);
  redirect('/travel');
}