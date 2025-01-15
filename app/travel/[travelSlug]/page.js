import classes from "./page.module.css";

import { getTravelData } from "@/lib/travel.js";
import Image from "next/image";
import { notFound } from 'next/navigation';
export default function TravelDetailsPage({ params }) {
  const travelData = getTravelData(params.travelSlug);

  console.log(params.travelSlug);

  if (!travelData) {
    notFound();
  }

  travelData.highlights = travelData.highlights.replace(/\n/g, '<br />');

  return(
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={travelData.image} alt={travelData.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{travelData.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${travelData.email}`}>{travelData.creator}</a>
          </p>
          <p className={classes.summary}>{travelData.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={classes.highlights}
          dangerouslySetInnerHTML={{ __html: travelData.highlights }}
        ></p>
      </main>
    </>
  );
}
