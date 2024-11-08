import Link from 'next/link';
import styles from './page.module.css';
import MealGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

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
