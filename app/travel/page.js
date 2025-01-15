import Link from "next/link";
import classes from "./page.module.css";
import TravelGrid from "@/components/travel/travel-grid";
import { getTravels } from "@/lib/travel";
import { Suspense } from "react";

async function Travels(){
 
  const travels = await getTravels();

  return   <TravelGrid travels ={travels}/>

}

export default  function TravelPage() {




  return (
    <>
      <header className={classes.header}>
        <h1>
          Adventurous places, added {""}
          <span className={classes.highlight}>by  adventure lovers.</span>
        </h1>
        <p>
          Travel Planner is a platform for Travelers to share their favorite
          spots within Mexico.
        </p>
        <p className={classes.cta}>
          <Link href="/travel/share"> Share Your Favorite Spot in Mexico!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Spots....</p>}>
        <Travels/>
        </Suspense>
     
      </main>
    </>
  );
}
