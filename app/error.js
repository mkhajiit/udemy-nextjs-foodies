'use client';
export default function ErrorPage({ error }) {
  return (
    <main className='error'>
      <h1>Error Occurred!</h1>
      <p>{error.message}</p>
    </main>
  );
}
