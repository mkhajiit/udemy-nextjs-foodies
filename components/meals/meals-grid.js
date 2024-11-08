import MealItem from './meal-item';
import styles from './meals-grid.module.css';

export default function MealGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

//스프레드 연산자를 사용하면 객체의 속성을 개별 prop으로 분리해서 넘길 수 있어서 편리
