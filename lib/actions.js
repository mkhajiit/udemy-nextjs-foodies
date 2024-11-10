'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}
export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  // 서버 사이드 입력 유효성 확인
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: '잘못된 입력입니다.' };
  }
  await saveMeal(meal);
  revalidatePath('/meals'); //app 디렉토리와 관련된 페이지를 리패칭(새로고침) 하는 함수입니다.
  //일반적으로 revalidatePath()는 데이터를 서버에서 새로 받아오고자 할 때, 특히 서버 컴포넌트나 서버 사이드 데이터를 갱신할 때 유용
  redirect('/meals');
}
