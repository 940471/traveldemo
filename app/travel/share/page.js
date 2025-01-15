import ImagePicker from '@/components/travel/image-picker';
import classes from './page.module.css';
import { shareTravel } from '@/lib/actions';
import TravelFormSubmit from '@/components/travel/travel-form-submit';

export default function ShareTravelPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite Spot</span>
        </h1>
        <p>Or any other activites you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareTravel}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="highlights">Highlights</label>
            <textarea
              id="highlights"
              name="highlights"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <TravelFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}