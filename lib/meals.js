import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';
import { storage } from '@/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error('내가만든에러다! 에러던지기!');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug= ?').get(slug);
}
//async 키워드가 있으면 반드시 Promise를 반환하게 됨

// saveMeal 코드 리뷰 반드시 할것
// 개발단계에서는 괜찮지만 배포단계에서는 이미지를 public에 저장하면 안됨
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  // 로컬에서 사용할떄 public에 image저장하는 방식
  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  // const bufferedImage = await meal.image.arrayBuffer();

  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error('Saving image failed!');
  //   }
  // });

  // meal.image = `/images/${fileName}`; //이미지에 대한 요청은 public으로 가기때문에 public을 안적어도 됨

  // 배포단계에서 firebase에 이미지 저정하는 방식
  const fileRef = ref(storage, `images/${fileName}`);

  try {
    // Firebase에 파일 업로드
    const snapshot = await uploadBytes(fileRef, meal.image);
    // 업로드가 완료되면 다운로드 URL 가져오기
    const downloadURL = await getDownloadURL(snapshot.ref);
    meal.image = downloadURL;
    db.prepare(
      `
        INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES(
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
        )
      `
    ).run(meal);
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}
