import Link from 'next/link';
import styles from './page.module.css';
import MealGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

// 정적 메타데이터
export const metadata = {
  title: '세상의 모든 음식들',
  description: '커뮤니티 유저들의 의해 공유된 맛있는 다양한 음식들이 소개되어 있습니다',
};
async function Meals() {
  const meals = await getMeals();

  return <MealGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>Delicious meals, created{''}</h1>
        <span className={styles.highlight}>by you</span>

        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={styles.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
