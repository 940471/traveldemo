import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Travel and Explore adventurous spots </h1>
            <p>Explore and share your Experiences!</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/travel">Explore Places</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
             Travel Planner  is a platform for Travelers to share their favorite
            spots  within Mexico . It&apos;s a place to discover new places, and to
            connect with other adventure lovers.
          </p>
          <p>
          Travel Planner is a place to discover new places in Mexico , and to connect
          with other adventure lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Travel Planner?</h2>
          <p>
            Travel Planner  is a platform for Travelers to share their favorite
            spots  within Mexico . It&apos;s a place to discover new places, and to
            connect with other adventure lovers.
          </p>
          <p>
          Travel Planner is a place to discover new places in Mexico , and to connect
          with other adventure lovers.
          </p>
        </section>
      </main>
    </>
  );
}