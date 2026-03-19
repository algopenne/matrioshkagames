type Game = {
  id: string
  title: string
  tagline: string
  releaseDate: string
  link: string // Steam/Store link
  imageUrl: string
  color: string // A theme color for the game's horizontal band
}

type SocialLink = {
  label: string
  link: string,
}

export const GAMES: Game[] = [
  {
    id: 'expedition-agartha',
    title: 'Expedition Agartha',
    tagline: 'A high-stakes first person slasher.',
    releaseDate: 'Available Now',
    link: 'https://store.steampowered.com/app/1552620/Expedition_Agartha/',
    imageUrl: '/expedition-agartha.png',
    color: 'bg-zinc-800',
  },
  {
    id: 'fallen-angel',
    title: 'Fallen Angel',
    tagline: 'A symphony of pixels and demon blood.',
    releaseDate: 'Available Now',
    link: 'https://store.steampowered.com/app/1124560/Fallen_Angel/',
    imageUrl: '/fallen-angel.jpg',
    color: 'bg-red-950',
  },
  {
    id: 'fling-to-the-finish',
    title: 'Fling to the Finish',
    tagline: 'A cooperative racing game where teammates are tethered together.',
    releaseDate: 'Available Now',
    link: 'https://store.steampowered.com/app/1054430/Fling_to_the_Finish/',
    imageUrl: '/fling-to-the-finish.png',
    color: 'bg-sky-600',
  },
  {
    id: 'howloween',
    title: 'Howloween Hero',
    tagline: 'A trick-or-treating adventure!',
    releaseDate: 'Available Now',
    link: 'https://store.steampowered.com/app/1715160/Howloween_Hero/',
    imageUrl: '/howloween.jpg',
    color: 'bg-orange-600',
  },
  {
    id: 'sole',
    title: 'Sole',
    tagline: 'Explore a dark world and bring light to it.',
    releaseDate: 'Available Now',
    link: 'https://store.steampowered.com/app/696280/SOLE/',
    imageUrl: '/sole.jpg',
    color: 'bg-purple-900',
  },
  {
    id: 'code-tycoon',
    title: 'Code Tycoon',
    tagline: 'Build and manage your own tech empire.',
    releaseDate: 'Available Now',
    link: 'https://www.youtube.com/watch?v=aO5QTNjUQ6o',
    imageUrl: '/code tycoon.jpg',
    color: 'bg-green-700',
  }
]

export const STUDIO_INFO = {
  name: 'Matrioshka Games',
  description: 'WHERE IMAGINATION MEETS MASTERY',
  tagline: 'We bring wild ideas to life.',
  contactEmail: 'contact@matrioshkagames.com'
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Steam',
    link: 'https://store.steampowered.com/search/?developer=Matrioshka%20Games',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/matrioshkagames',
  },
  {
    label: 'YouTube',
    link: 'https://www.youtube.com/@matrioshkagames7620',
  }
]
