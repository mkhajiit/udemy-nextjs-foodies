import ImagePicker from '@/components/image-picker/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
// server action은 client 컴포넌트에서는 작동하지 않는다.
// 따라서 클라이언트 컴포넌트를 쓰고 싶다면 따로 server action을 빼서 임포트 하는 방식으로 사용가능
export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input type='text' id='name' name='name' required />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input type='email' id='email' name='email' required />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' required />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input type='text' id='summary' name='summary' required />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea id='instructions' name='instructions' rows='10' required></textarea>
          </p>
          <ImagePicker label='your name' name='image' />
          <p className={classes.actions}>
            <button type='submit'>Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}