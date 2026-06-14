/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Book, Author, TimelineItem, AnalysisItem } from './types';

export const BOOKS: Book[] = [
  {
    id: 'stranger',
    title: 'The Stranger',
    author: 'Albert Camus',
    year: 1942,
    genres: ['Existential', 'Literary Fiction'],
    rating: 5,
    darkness: { psych: 6, nihil: 9, violence: 4, moral: 8 },
    description: "Meursault, a French Algerian, kills an Arab man on a beach for seemingly no reason and shows no remorse. Camus's landmark work of absurdist philosophy strips away societal warmth to examine the cold, absolute indifference of the universe.",
    quote: '"Since we\'re all going to die, it\'s obvious that when and how don\'t matter."',
    goodreads: 'https://www.goodreads.com/book/show/49552.The_Stranger',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #dfd8cb 0%, #bcaea1 100%)',
      textColor: '#1a1814',
      borderColor: '#4a453f',
      accentColor: '#c41e1e',
      patternType: 'circle' // hot sun
    }
  },
  {
    id: 'crime',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genres: ['Psychological', 'Literary Fiction'],
    rating: 5,
    darkness: { psych: 10, nihil: 7, violence: 6, moral: 9 },
    description: "Raskolnikov, a destitute student in St. Petersburg, murders a pawnbroker to prove his theory that extraordinary men are above conventional morality. Dostoevsky's psychological deep-dive into guilt, religious fever, and moral redemption remains unmatched.",
    quote: '"Pain and suffering are always inevitable for a large intelligence and a deep heart."',
    goodreads: 'https://www.goodreads.com/book/show/7144.Crime_and_Punishment',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #1c1313 0%, #2c1a1a 100%)',
      textColor: '#e8e4dd',
      borderColor: '#8b0000',
      accentColor: '#dc143c',
      patternType: 'gothic'
    }
  },
  {
    id: 'bloodmeridian',
    title: 'Blood Meridian',
    author: 'Cormac McCarthy',
    year: 1985,
    genres: ['Western', 'Historical', 'Literary Fiction'],
    rating: 5,
    darkness: { psych: 7, nihil: 10, violence: 10, moral: 9 },
    description: "Following a teenage runaway through the lawless Texas-Mexico borderlands of the 1840s, Blood Meridian depicts scalp hunters with staggering, biblical brutality. Anchored by the demonic, immortal Judge Holden, it is McCarthy's most ferocious query into violence.",
    quote: '"Whatever in creation exists without my knowledge exists without my consent."',
    goodreads: 'https://www.goodreads.com/book/show/394535.Blood_Meridian',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #2b0000 0%, #0d0101 100%)',
      textColor: '#f5efe6',
      borderColor: '#a81010',
      accentColor: '#d4a017',
      patternType: 'minimal'
    }
  },
  {
    id: 'orwell1984',
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genres: ['Dystopian', 'Science Fiction'],
    rating: 5,
    darkness: { psych: 9, nihil: 8, violence: 5, moral: 7 },
    description: "In a totalitarian future ruled by the omnipresent Big Brother, Winston Smith begins a doomed act of romantic and intellectual rebellion. Orwell's dark prophecy of doublethink, state surveillance, and the complete deletion of truth is a monumental message.",
    quote: '"War is peace. Freedom is slavery. Ignorance is strength."',
    goodreads: 'https://www.goodreads.com/book/show/40961427-1984',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #111116 0%, #1a1a24 100%)',
      textColor: '#ffffff',
      borderColor: '#c41e1e',
      accentColor: '#ff4444',
      patternType: 'stripes'
    }
  },
  {
    id: 'heartdark',
    title: 'Heart of Darkness',
    author: 'Joseph Conrad',
    year: 1899,
    genres: ['Literary Fiction', 'Historical'],
    rating: 4,
    darkness: { psych: 7, nihil: 8, violence: 6, moral: 9 },
    description: "Marlow travels deep up the Congo River inside the Belgian imperial trade, searching for Kurtz, a rogue ivory merchant who has descended into absolute madness. Conrad's novella exposes the darkness of colonial exploitation and raw humanity.",
    quote: '"The horror! The horror!"',
    goodreads: 'https://www.goodreads.com/book/show/4900.Heart_of_Darkness',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #091a0c 0%, #030a04 100%)',
      textColor: '#dfdcd5',
      borderColor: '#006400',
      accentColor: '#8b0000',
      patternType: 'waves'
    }
  },
  {
    id: 'theroad',
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genres: ['Post-Apocalyptic', 'Literary Fiction'],
    rating: 5,
    darkness: { psych: 9, nihil: 9, violence: 7, moral: 6 },
    description: "A father and son push a rickety shopping cart through the ash-covered skeletons of an American wasteland, searching for warmth. McCarthy's prose is a devastated query of love, humanity, and moral resilience in the ultimate cold winter.",
    quote: '"You have to carry the fire."',
    goodreads: 'https://www.goodreads.com/book/show/6288.The_Road',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #1f1f1f 0%, #0d0d0d 100%)',
      textColor: '#cccccc',
      borderColor: '#555555',
      accentColor: '#c41e1e',
      patternType: 'minimal'
    }
  },
  {
    id: 'bravenew',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    genres: ['Dystopian', 'Science Fiction'],
    rating: 5,
    darkness: { psych: 7, nihil: 8, violence: 3, moral: 9 },
    description: "In a sterile, engineered future of genetics and drug-induced euphoria, Bernard Marx feels isolated. Huxley's vision explores the chilling horror of a soft dictatorship: control through genetic design and cheap pleasures that leave no room for art or truth.",
    quote: '"But I don\'t want comfort. I want God, I want poetry, I want real danger."',
    goodreads: 'https://www.goodreads.com/book/show/5129.Brave_New_World',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #102030 0%, #0a111a 100%)',
      textColor: '#a3c2db',
      borderColor: '#0088cc',
      accentColor: '#00ffcc',
      patternType: 'cyber'
    }
  },
  {
    id: 'fahrenheit',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    year: 1953,
    genres: ['Dystopian', 'Science Fiction'],
    rating: 5,
    darkness: { psych: 6, nihil: 7, violence: 4, moral: 6 },
    description: "Guy Montag is a fireman in a future America whose job is to burn illegal books. Bradbury's prophetic novel warns against anti-intellectual distraction, state censorship, and a society that trades literature for screen-based entertainment.",
    quote: '"There must be something in books, things we can\'t imagine..."',
    goodreads: 'https://www.goodreads.com/book/show/17470674-fahrenheit-451',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #1f0b03 0%, #0d0401 100%)',
      textColor: '#fba834',
      borderColor: '#ff4500',
      accentColor: '#ff2200',
      patternType: 'paranoia'
    }
  },
  {
    id: 'americanpsycho',
    title: 'American Psycho',
    author: 'Bret Easton Ellis',
    year: 1991,
    genres: ['Thriller', 'Literary Fiction'],
    rating: 4,
    darkness: { psych: 9, nihil: 8, violence: 10, moral: 10 },
    description: "Patrick Bateman is a wealthy Wall Street mergers-and-acquisitions banker who leads a second, blood-soaked life as a brutal serial killer. Ellis's savage satire exposes the horror of consumerist greed, toxic yuppie vanity, and complete human detachment.",
    quote: '"I have all the characteristics of a human being... but not a single, clear emotion."',
    goodreads: 'https://www.goodreads.com/book/show/28676.American_Psycho',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #ffffff 0%, #ebebeb 100%)',
      textColor: '#111111',
      borderColor: '#d1d1d1',
      accentColor: '#990000',
      patternType: 'minimal'
    }
  },
  {
    id: 'gonegirl',
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    year: 2012,
    genres: ['Thriller', 'Mystery'],
    rating: 4,
    darkness: { psych: 9, nihil: 5, violence: 5, moral: 9 },
    description: "When Amy Dunne disappears on her fifth anniversary, suspicion lands heavily on her husband Nick. Flynn's thriller is a dazzling, unreliable narrative layout exposing toxic domestic warfare, performance, and psychological manipulation.",
    quote: '"We weren\'t ourselves when we fell in love, and when we became ourselves — surprise..."',
    goodreads: 'https://www.goodreads.com/book/show/19288043-gone-girl',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #18283a 0%, #09131e 100%)',
      textColor: '#e6f0fa',
      borderColor: '#2b5a84',
      accentColor: '#4fc3f7',
      patternType: 'paranoia'
    }
  },
  {
    id: 'neuromancer',
    title: 'Neuromancer',
    author: 'William Gibson',
    year: 1984,
    genres: ['Science Fiction', 'Dystopian'],
    rating: 4,
    darkness: { psych: 7, nihil: 6, violence: 5, moral: 7 },
    description: "Case, a burned-out console hacker, is hired by a mysterious colonel for a final run against a colossal corporate artificial intelligence. Gibson's cyberpunk masterpiece defined our vision of the internet and high-tech corporate despair.",
    quote: '"The sky above the port was the color of television, tuned to a dead channel."',
    goodreads: 'https://www.goodreads.com/book/show/22328.Neuromancer',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #050510 0%, #10101b 100%)',
      textColor: '#a0ecff',
      borderColor: '#ff00aa',
      accentColor: '#00ffd2',
      patternType: 'cyber'
    }
  },
  {
    id: 'got',
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    year: 1996,
    genres: ['Fantasy'],
    rating: 5,
    darkness: { psych: 6, nihil: 6, violence: 8, moral: 9 },
    description: "In Westeros, noble houses plot and clash for the absolute prize of the Iron Throne, unaware of ancient monsters awakening in the frozen North. Martin's grimdark classic deconstructs classic heroism: honor is a trap, and power is a calculation of blood.",
    quote: '"When you play the game of thrones, you win or you die."',
    goodreads: 'https://www.goodreads.com/book/show/13496.A_Game_of_Thrones',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #22222a 0%, #15151c 100%)',
      textColor: '#f5ee30',
      borderColor: '#d4a017',
      accentColor: '#c41e1e',
      patternType: 'gothic'
    }
  },
  {
    id: 'metamorphosis',
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    year: 1915,
    genres: ['Existential', 'Literary Fiction'],
    rating: 5,
    darkness: { psych: 9, nihil: 8, violence: 3, moral: 7 },
    description: "Gregor Samsa wakes up to find himself transformed in his bed into a monstrous, giant insect. As both his physical condition and family's empathy collapse, Kafka details Gregor's slow isolation in a masterwork of dry, existential despair.",
    quote: '"Gregor Samsa awoke one morning... found himself transformed..."',
    goodreads: 'https://www.goodreads.com/book/show/485894.The_Metamorphosis',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #2c331a 0%, #1c2010 100%)',
      textColor: '#ebdcb2',
      borderColor: '#556b2f',
      accentColor: '#ff2200',
      patternType: 'waves'
    }
  },
  {
    id: 'fightclub',
    title: 'Fight Club',
    author: 'Chuck Palahniuk',
    year: 1996,
    genres: ['Literary Fiction', 'Thriller'],
    rating: 4,
    darkness: { psych: 9, nihil: 8, violence: 9, moral: 8 },
    description: "An insomniac office clerk meets Tyler Durden, an charismatic soap salesman. Together they found an underground network of raw physical clubs that soon metastasizes into a violent, nihilistic anarchist army targeting corporate society.",
    quote: '"It\'s only after we\'ve lost everything that we\'re free to do anything."',
    goodreads: 'https://www.goodreads.com/book/show/36236124-fight-club',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #ea4c88 0%, #b31055 100%)',
      textColor: '#ffffff',
      borderColor: '#ffffff',
      accentColor: '#222222',
      patternType: 'stripes'
    }
  },
  {
    id: 'silencelambs',
    title: 'The Silence of the Lambs',
    author: 'Thomas Harris',
    year: 1888,
    genres: ['Thriller', 'Horror'],
    rating: 5,
    darkness: { psych: 9, nihil: 5, violence: 8, moral: 8 },
    description: "FBI trainee Clarice Starling must interview the brilliant, imprisoned cannibal Dr. Hannibal Lecter to understand and track down another savage serial killer. Harris lays down a psychological cat-and-mouse game of absolute brilliance.",
    quote: '"A census taker once tried to test me. I ate his liver with some fava beans..."',
    goodreads: 'https://www.goodreads.com/book/show/23807.The_Silence_of_the_Lambs',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #151111 0%, #030303 100%)',
      textColor: '#ecc13d',
      borderColor: '#d4a017',
      accentColor: '#ff0000',
      patternType: 'gothic'
    }
  },
  {
    id: 'nightelie',
    title: 'Night',
    author: 'Elie Wiesel',
    year: 1960,
    genres: ['Historical', 'Literary Fiction'],
    rating: 5,
    darkness: { psych: 10, nihil: 9, violence: 9, moral: 8 },
    description: "Weisel's personal memoir of surviving the horrors of Auschwitz and Buchenwald at the height of WWII. A devastating, essential chronicle of absolute loss of faith, human indifference, and physical survival.",
    quote: '"Never shall I forget that night, the first night in camp."',
    goodreads: 'https://www.goodreads.com/book/show/1617.Night',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #0e1217 0%, #1c222b 100%)',
      textColor: '#ffffff',
      borderColor: '#4e5a65',
      accentColor: '#c41e1e',
      patternType: 'stripes'
    }
  },
  {
    id: 'nocountry',
    title: 'No Country for Old Men',
    author: 'Cormac McCarthy',
    year: 2005,
    genres: ['Thriller', 'Western'],
    rating: 5,
    darkness: { psych: 8, nihil: 9, violence: 9, moral: 9 },
    description: "Llewelyn Moss stumbles upon a bloody desert scene of drug-dealers gone wrong and claims a suitcase of cash. What ensues is a terrifying pursuit by Anton Chigurh, a psychopathic force of fate carrying a pneumatic bolt gun.",
    quote: '"You can\'t stop what\'s coming."',
    goodreads: 'https://www.goodreads.com/book/show/12497.No_Country_for_Old_Men',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #513e2f 0%, #2f251d 100%)',
      textColor: '#fbead1',
      borderColor: '#8b0000',
      accentColor: '#e0bb2a',
      patternType: 'minimal'
    }
  },
  {
    id: 'sharpobj',
    title: 'Sharp Objects',
    author: 'Gillian Flynn',
    year: 2006,
    genres: ['Thriller', 'Mystery'],
    rating: 4,
    darkness: { psych: 9, nihil: 5, violence: 7, moral: 8 },
    description: "Fresh from a brief stay at a psych hospital, reporter Camille Preaker must return to her tiny Missouri hometown to cover raw child murders, confronting her mother's dark shadows and her own deep scars.",
    quote: '"I have a meanness inside me, real as an organ."',
    goodreads: 'https://www.goodreads.com/book/show/18045891-sharp-objects',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #2b1c20 0%, #1a0e10 100%)',
      textColor: '#fba3ad',
      borderColor: '#c41e1e',
      accentColor: '#ff2255',
      patternType: 'paranoia'
    }
  },
  {
    id: 'belljar',
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
    year: 1963,
    genres: ['Literary Fiction', 'Psychological'],
    rating: 5,
    darkness: { psych: 10, nihil: 7, violence: 3, moral: 5 },
    description: "Esther Greenwood is brilliant, beautiful, and highly successful, but she finds herself sliding into a severe, suffocating clinical depression. Plath's semi-autobiographical masterpiece details Esther's breakdown with stark honesty.",
    quote: '"I wanted to crawl in between the black lines..."',
    goodreads: 'https://www.goodreads.com/book/show/6514.The_Bell_Jar',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #1b0a20 0%, #0c0410 100%)',
      textColor: '#ecb3ff',
      borderColor: '#9a32cd',
      accentColor: '#ff00dd',
      patternType: 'circle'
    }
  },
  {
    id: 'annihilation',
    title: 'Annihilation',
    author: 'Jeff VanderMeer',
    year: 2014,
    genres: ['Horror', 'Science Fiction'],
    rating: 4,
    darkness: { psych: 10, nihil: 7, violence: 5, moral: 6 },
    description: "A biologist leads an all-female scientific expedition into the abandoned, anomalous territory of 'Area X'. There, mutated life, physical contamination, and psychological dissolution challenge the limits of human science.",
    quote: '"The transition from normal to strange was as swift as stepping over an invisible boundary."',
    goodreads: 'https://www.goodreads.com/book/show/17934530-annihilation',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #150a25 0%, #030d05 100%)',
      textColor: '#b2ffb2',
      borderColor: '#55cc55',
      accentColor: '#9933ff',
      patternType: 'waves'
    }
  }
];

export const AUTHORS: Author[] = [
  {
    id: 'mccarthy',
    name: 'Cormac McCarthy',
    years: '1933-2023',
    role: 'The Master of Apocalyptic Vision',
    bio: "Cormac McCarthy stands as one of America's most uncompromised literary voices, writing dense prose landscapes that reveal the absolute darkness of nature, violence, and destiny. His minimalist punctuation, biblical cadences, and raw examinations of survival established him as a giant of dark letters.",
    style: ['Minimalist punctuation', 'Biblical, prophetic tone', 'Spare, devastating prose', 'Cinematic descriptions'],
    themes: ['Violence and survival', 'Moral grey zones', 'Indifferent nature', 'Father-son frameworks'],
    essentialWorks: ['Blood Meridian', 'The Road', 'No Country for Old Men'],
    quote: '"There is no God and we are his prophets."',
    quoteSource: 'The Road',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cormac_McCarthy',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #302018 0%, #15100d 100%)',
      textColor: '#e8ddcc',
      borderColor: '#d4a017',
      accentColor: '#c41e1e'
    }
  },
  {
    id: 'orwell',
    name: 'George Orwell',
    years: '1903-1950',
    role: 'Prophet of Dystopia & State Control',
    bio: "Eric Arthur Blair, writing as George Orwell, used his razor-sharp satirical intellect to critique totalitarianism, propaganda, and surveillance. His political clarity exposes the mechanics of mass psychological obedience.",
    style: ['Direct, transparent prose', 'Biting satire', 'Political precision', 'Immersive dread'],
    themes: ['State propaganda', 'Loss of language/truth', 'Unrestricted surveillance', 'Destruction of history'],
    essentialWorks: ['1984', 'Animal Farm', 'Homage to Catalonia'],
    quote: '"Doublethink means the power of holding two contradictory beliefs in one\'s mind simultaneously, and accepting both of them."',
    quoteSource: '1984',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/George_Orwell',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #101c24 0%, #050b10 100%)',
      textColor: '#e1eef5',
      borderColor: '#1e88e5',
      accentColor: '#ff2222'
    }
  },
  {
    id: 'kafka',
    name: 'Franz Kafka',
    years: '1883-1924',
    role: 'Pioneer of Bureaucratic Surrealism',
    bio: "Franz Kafka documented the surreal nightmare of modern life, describing individuals trapped under anonymous, absurd bureaucracies or experiencing physical transformations. His name is synonymous with existential alienation.",
    style: ['Dry bureaucratic realism', 'Surreal transformations', 'Nightmarish alienation', 'Dark modern irony'],
    themes: ['Unreachable authorities', 'Guilt and standard shame', 'Family neglect', 'Loss of agency'],
    essentialWorks: ['The Metamorphosis', 'The Trial', 'The Castle'],
    quote: '"We are photos of a world that is spinning out of control."',
    quoteSource: 'Letters to Milena',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Franz_Kafka',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #2b3520 0%, #151a0d 100%)',
      textColor: '#f5efe0',
      borderColor: '#5a782d',
      accentColor: '#ffa726'
    }
  },
  {
    id: 'dostoevsky',
    name: 'Fyodor Dostoevsky',
    years: '1821-1881',
    role: 'Psychological Explorer of the Soul',
    bio: "Dostoevsky spent his life examining the feverish depth of the human mind under extreme stress, isolation, and political delusion. He anticipated 20th-century existentialism and psychoanalysis with terrifying accuracy.",
    style: ['Feverish internal monologues', 'Philosophical debates', 'Unstable, wild characters', 'Gothic realism'],
    themes: ['Guilt and redemption', 'Existential isolation', 'Moral anarchy vs. faith', 'Societal decay'],
    essentialWorks: ['Crime and Punishment', 'The Brothers Karamazov', 'Notes from Underground'],
    quote: '"The degree of civilization in a society can be judged by entering its prisons."',
    quoteSource: 'The House of the Dead',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Fyodor_Dostoevsky',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #2c1a1a 0%, #140d0d 100%)',
      textColor: '#ebdcd5',
      borderColor: '#8b1e1e',
      accentColor: '#dc143c'
    }
  },
  {
    id: 'poe',
    name: 'Edgar Allan Poe',
    years: '1809-1849',
    role: 'Architect of Gothic Terror',
    bio: "Poe holds a unique place in history as the master of gothic macabre and short horror stories. His meticulous language designs have influenced gothic, detective, and psychological fiction globally for generations.",
    style: ['Rhythmic, hypnotic syntax', 'Vivid, gothic decoration', 'Melodramatic tension', 'First-person obsession'],
    themes: ['Madness and decay', 'Premature burial', 'Mourning lost beauty', 'Death\'s inevitability'],
    essentialWorks: ['The Fall of the House of Usher', 'The Tell-Tale Heart', 'The Raven'],
    quote: '"All that we see or seem is but a dream within a dream."',
    quoteSource: 'The Raven & Other Poem Books',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Edgar_Allan_Poe',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #161616 0%, #050505 100%)',
      textColor: '#ffffff',
      borderColor: '#4d4d4d',
      accentColor: '#8b0000'
    }
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'ww1',
    years: '1914-1918',
    title: 'World War I & Modernist Trauma',
    description: 'The Great War shattered the naive optimism of 19th-century Europe with industrial-scale mechanized slaughter. This collective trauma birthed modernist literature, absolute disillusionment, and existential anxiety.',
    genres: ['War Literature', 'Modernism', 'Anti-War'],
    books: ['metamorphosis']
  },
  {
    id: 'depression',
    years: '1929-1939',
    title: 'The Great Depression',
    description: 'When global economies collapsed, starvation and mass displacement exposed the hollow nature of industrial dreams. Literature turned sharply toward bleak social realism, survival, and moral desperation.',
    genres: ['Social Realism', 'Economic Drama'],
    books: ['bravenew']
  },
  {
    id: 'ww2',
    years: '1939-1945',
    title: 'WWII & The Holocaust Void',
    description: 'Industrialized genocide, fascism, and nuclear detonation shattered standard moral categories. Writers turned to existentialism to ask how human sanity and morality can survive in absolute chaos.',
    genres: ['Memoir', 'Existentialism', 'Holocaust Literature'],
    books: ['nightelie', 'stranger']
  },
  {
    id: 'coldwar',
    years: '1945-1991',
    title: 'Cold War Paranoia & Nuclear Shadows',
    description: 'The threat of absolute global destruction by nuclear exchange, alongside the rise of surveillance bureaus, generated a literature of profound paranoia, ideological decay, and dystopian warning.',
    genres: ['Dystopian Fiction', 'Social Critique', 'Nuclear Anxiety'],
    books: ['orwell1984', 'fahrenheit', 'belljar']
  },
  {
    id: 'postmodern',
    years: '1990s-Present',
    title: 'Post-Modern Despair & Climate Crisis',
    description: 'An increasingly fragmented, digital world facing massive ecological threat, corporate hegemony, and mental isolation has turned contemporary authors toward raw, transgressive, and post-apocalyptic studies of survival.',
    genres: ['Post-Modernism', 'Post-Apocalyptic', 'Psychological Thriller'],
    books: ['bloodmeridian', 'theroad', 'americanpsycho', 'gonegirl', 'neuromancer', 'got', 'fightclub', 'silencelambs', 'nocountry', 'sharpobj', 'annihilation']
  }
];

export const ANALYSES: AnalysisItem[] = [
  {
    id: 'orwell-architecture',
    title: 'The Architecture of Control: Surveillance in Orwell\'s 1984',
    subtitle: 'How totalitarian design replaces individual sanity with structural compliance.',
    date: 'June 10, 2026',
    readTime: '15 min read',
    author: 'Dr. Sarah Thompson',
    tags: ['Dystopian Literature', 'Political Theory', 'Orwell Studies'],
    content: `George Orwell's **1984** is not merely an accusation of authoritarianism, but a brilliant architectural diagnostic. The landscape of Oceania is laid out specifically to enforce the deletion of individual memory and consolidate continuous state authority.

Surveillance in Oceania operates through three interconnected nodes: the physical (Telescreens), the linguistic (Newspeak), and the psychological (the fiction of Big Brother).

### 1. The Telescreen as Inverted Agency
The Telescreen represents a complete inversion of modern technology's promise of connectivity. Instead of allowing the individual to look out at the world, it forces the world to look in on the individual. Winston Smith describes how even a small change in facial expression, a rapid intake of breath, or a heartbeat could be diagnosed through the screen as 'Thoughtcrime'.

This continuous, potential observation forces a self-surveillance loop. The human citizen becomes their own guard, editing their own thoughts before they can even be expressed. Sanity is translated into obedience.

### 2. Language and the Prison of Newspeak
The secondary structural control is linguistic. Newspeak is unique because its vocabulary shrinks every year instead of expanding. Dr. Syme, a Newspeak linguist, enthusiastically details how decreasing vocabulary directly restricts the range of human thought: "In the end we shall make thoughtcrime literally impossible, because there will be no words in which to express it."

Orwell shows us that if a mind does not possess the terms for freedom, rebellion, or self-determination, it cannot construct the concepts necessary to resist. The wall is built directly inside the brain's linguistic circuitry.

### 3. The Symbolism of the Dialectical Void
Ultimately, the tragedy of Winston Smith is not that he is killed, but that his mind is rebuilt. Room 101, where prisoners are exposed to their deepest psychological terror, is not a torture chamber of random pain, but the final demolition of personal value. By forcing Winston to betray Julia ("Do it to Julia! Not me!"), the Party removes his final anchor of personal loyalty. 

Once his loyalty is successfully redirected to the Party, he is allowed his physical ending. The architecture of control is absolute: it does not tolerate martyrs; it transforms its rebels into lovers of the state, then deletes them.`
  },
  {
    id: 'mccarthy-wasteland',
    title: 'The Wasteland Within: Symbolism in Blood Meridian',
    subtitle: 'McCarthy\'s use of desert geography as a mirror to moral emptiness.',
    date: 'May 18, 2026',
    readTime: '12 min read',
    author: 'Prof. Marcus Vance',
    tags: ['McCarthy studies', 'Western Gothic', 'Symbolism'],
    content: `Cormac McCarthy's **Blood Meridian** is widely considered one of the most violent novels in American history. Yet, its brutality is not sensational, but deeply theological and symbolic.

The dry, alkaline wastes of the American West are not merely a backdrop for the Glanton gang's scalp-hunting expedition. Instead, the geography of the desert represents a moral wilderness—an indifferent, ancient void where human civilization's illusions are instantly dissolved.

### 1. The Judge as the Embodiment of the Wilderness
Judge Holden is the towering, hairless center of the novel. He is fluent in multiple languages, possessing dense knowledge of botany, archaeology, and law. Yet, he uses his massive intellect not to build, but to dominate. He argues that whatever exists without his consent exists unlawfully, and that war is the ultimate game because it demands a player's complete physical soul.

The Judge is the desert personified: immense, ancient, indifferent, and violently absolute. He represents the terrifying possibility that order is a lie, and that only violence possesses absolute, enduring truth.

### 2. The Bleached Bone Liturgy
Throughout the book, McCarthy describes landscapes littered with bleached bones, ancient ruins, and dry salt lakes. These symbols emphasize the insignificance of human scale and time. The characters are depicted as tiny, dark silhouettes crawling across a vast, uncaring lithosphere.

By stripping away the standard myth of the American West as a land of heroic destiny, McCarthy forces the reader to confront a deeper, gothic truth: that violence is not a temporary aberration of progress, but a permanent, base current of human existence.`
  }
];
