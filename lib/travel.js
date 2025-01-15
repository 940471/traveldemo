import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('travels.db');

export async function getTravels() {
   await new Promise((resolve) => setTimeout(resolve, 5000)) ;

   //throw new Error('Loading Page failed');
  return db.prepare('SELECT * FROM travels').all();
}

export function getTravelData(slug) {

    return db.prepare('SELECT * FROM travels WHERE slug = ?').get(slug);
  }


  export async function saveTravel(travel) {
    travel.slug = slugify(travel.title, { lower: true });
    travel.highlights = xss(travel.highlights);
  
    const extension = travel.image.name.split('.').pop();
    const fileName = `${travel.slug}.${extension}`;
  
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await travel.image.arrayBuffer();
  
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error('Saving image failed!');
      }
    });
  
    travel.image = `/images/${fileName}`;
  
    db.prepare(`
      INSERT INTO travels
        (title, summary, highlights, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @highlights,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `).run(travel);
  }