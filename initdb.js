const sql = require('better-sqlite3');
const db = sql('travels.db');

const dummyTravels = [
  {
    title: 'Antropology Musem',
    slug: 'Antropology-Musem',
    image: '/images/AntropologyMusem.jpg',
    summary:
      'National Museum of Anthropology (Museo Nacional de Antropologia) in Mexico City contains the world largest collection of ancient Mexican art and also has ethnographic exhibits about Mexico present-day indigenous groups.',
    highlights: `
     - The Sun Stone or Aztec Calendar
        - Recreation of Pakal's tomb in Maya exhibit room
    - Jade mask of the Zapotec Bat God in Oaxaca exhibit room.
            
    opening hours- weekdays, weekends 09:00 - 19:00

    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Archeology zone',
    slug: 'Archeology-zone',
    image: '/images/Archeologyzone.jpg',
    summary:
      'Mexico has many archaeological zones, including Mayan sites, Aztec sites, and other archaeological sites',
    highlights: `
      Chichén Itzá
A city on the Yucatán Peninsula with Mayan temples and buildings, plus evidence of migration from other Latin cultures.
  Tulum
A Mayan city on the Caribbean Sea, protected by a limestone wall.
    
Becán
A former regional capital with monumental constructions and a fosse around its most important buildings.
     opening hours- weekdays, weekends 09:00 - 19:00

    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Bellas palace',
    slug: 'Bellas-palace',
    image: '/images/Bellaspalace.jpg',
    summary:
      'The Palacio de Bellas Artes, or Palace of Fine Arts',
    highlights: `
      The Palacio de Bellas Artes, or Palace of Fine Arts, is a prominent cultural center in Mexico City that's known for its art, architecture, and performances: 
Architecture
The palace's exterior is art nouveau and neoclassical, while the interior is art deco. 
Art
The palace houses several famous murals, including works by Rufino Tamayo, Rivera, Siqueiros, and Orozco. The palace also has art museums and galleries. 
Performances
The palace hosts a variety of performing arts events, including music, dance, theater, opera, and literary performances. The palace is home to the National Theater company, the National Dance Company, and the National Symphony Orchestra. 
Location
The palace is located in the historic center of Mexico City, close to the Alameda Central park. 
Admission
Admission is 75 Mexican pesos (about $4.50), but it's free on Sundays for both foreigners and Mexican nationals. Admission is also free for those under 13 or with a disability. Tickets must be purchased on the day from the museum ticket office. 
Here are some other things to know about the Palacio de Bellas Artes:
It's also known as the "art cathedral of Mexico". 
It's the headquarters of the Instituto Nacional de Bellas Artes y Literatura (INBAL), which coordinates artistic and cultural activities for the country. 
A typical visit to the palace takes about 2 or 3 hours. 
The palace is family-friendly enough for most standards, but some of the art on display may not be appropriate for some kids. 
Guided tours are available in English and Spanish. 
Palacio de Bellas Artes - Wikipedia
The Palacio de Bellas Artes (Palace of Fine Arts) is a prominent cultural center in Mexico City. This hosts performing arts events...

Wikipedia
Palacio de Bellas Artes, Centro Histórico - Mexico City
The Palacio de Bellas Artes is not just one of the most prominent buildings in the country. It's also the major Fine Arts institut...

Mexico City
Palacio de Bellas Artes - All You Need to Know BEFORE You Go ( ...
I think we visited on the wrong day. It was raining so everyone wanted to do something inside so it was packed out and far too cro...

    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Castle Chapultepec',
    slug: 'Castle-Chapultepec',
    image: '/images/CastleChapultepec.jpg',
    summary:
      "Chapultepec Castle (Spanish: Castillo de Chapultepec) is located on top of Chapultepec Hill in Mexico City's Chapultepec park.",
    highlights: `
      The name "Chapultepec" means "at the grasshopper hill" in Nahuatl and refers to a large rock formation that is the center of the park's first section.
      In 1833, it was assigned to the Colegio Militar, as the military academy charged with training young officers for the Mexican Army. The Castle is most famous as the site of the Battle of Chapultepec still commemorated in the U.S. Marines theme song which begins “From the Halls of Montezuma.”
      We recommend setting aside at least half a day to explore the castle fully. We were at the castle for nearly 4 hours – and we still felt like we didn't have enough time to absorb everything in there!Jul 9, 2023.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Frida Museum',
    slug: 'Frida-Museum',
    image: '/images/FridaMuseum.jpg',
    summary:
      'The Blue House, located in Coyoacán, is a space where visitors can learn about the life and work of Frida Kahlo .',
    highlights: `
      The Frida Kahlo Museum (Spanish: Museo Frida Kahlo), also known as the Blue House (La Casa Azul) for the structure's cobalt-blue walls, is a historic house museum and art museum dedicated to the life and work of Mexican artist Frida Kahlo. 

      It is in the Colonia del Carmen neighborhood of Coyoacán in Mexico City.
       Installed in the late 1960s, this permanent exhibition preserves the ambience and treasured objects that surrounded Frida and Diego: iconic paintings like Viva la Vida (Long Live Life) and Frida's first self-portrait, the collection of ex-votos, photos and paintings from the sixteenth to nineteenth centuries 
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'pryamid',
    slug: 'pryamid',
    image: '/images/pryamid.jpg',
    summary:
      'Mexico has many pyramids, including the Pyramid of the Sun and the Pyramid of the Moon',
    highlights: `
     he largest pyramid in Teotihuacan, and one of the largest in Mesoamerica 
Located on the Avenue of the Dead, between the Pyramid of the Moon and the Ciudadela 
Built around 200 AD 
Made of tezontle, a red volcanic rock 
216 feet (66 meters) tall, with a base of about 720 by 760 feet (220 by 230 meters)
 `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  }
  
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS travels (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       highlights TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO travels VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @highlights,
         @creator,
         @creator_email
      )
   `);

  for (const travels of dummyTravels) {
    stmt.run(travels);
  }
}
initData();