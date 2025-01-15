import Image from 'next/image';


import communityIcon from '@/assets/icons/community.jpeg';
import eventsIcon from '@/assets/icons/events.jpg';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Travel</span>
        </h1>
        <p>Join our community and share your Experiences!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
       
          <li>
            <Image src={communityIcon} alt="A crowd of people, Exploring" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at various event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}