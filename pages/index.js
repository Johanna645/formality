import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
// import postgres from 'postgres';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function handleAge(event) {
    setAge(event.target.value);
  }

  function handleClick() {}

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is the home page</h1>

        <p className={styles.description}>
          here will come the form with some buttons and input fields
        </p>

        <div className={styles.grid}>
          <form>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleFirstName}
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleLastName}
              />
            </label>

            <label>
              Age
              <input
                type="integer"
                name="age"
                value={age}
                onChange={handleAge}
              />
            </label>

            <span>
              I am a Robot
              <button type="checkbox" />
            </span>

            <button type="submit" value="save" onClick={handleClick}>
              Save
            </button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
