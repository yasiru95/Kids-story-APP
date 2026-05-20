import story1 from "../assets/audio/story1.mp3"
import story2 from "../assets/audio/story2.mp3"
import story3 from "../assets/audio/story3.mp3"

export const heroSlides = [
  {
    id: 1,
    title: "📚 Kids Story Land..",
    description: "Magical adventures and fairy tales for kids 🌈",
    image: "https://res.cloudinary.com/dxe23gtsc/image/upload/v1779272836/8_i7nldx.webp",
  },
  {
    id: 2,
    title: "🦁 Brave Lion",
    description: "Join Leo in jungle adventures 🦁",
    image: "https://res.cloudinary.com/dxe23gtsc/image/upload/v1779272834/4_grvsqm.webp",
  },
  {
    id: 3,
    title: "🚀 Space Adventure",
    description: "Travel across stars and galaxies 🚀",
    image: "https://res.cloudinary.com/dxe23gtsc/image/upload/v1779272833/3_wvercf.webp",
  },
]

export const featuredStories = [
  {
    id: 1,
    title: "🦁 Brave Lion",
    description: "A brave lion protects the jungle animals.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    color: "text-orange-500",
  },
  {
    id: 2,
    title: "🐰 Magic Rabbit",
    description: "A rabbit discovers magical forest powers.",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    color: "text-pink-500",
  },
  {
    id: 3,
    title: "🚀 Space Adventure",
    description: "Kids explore stars and galaxies.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    color: "text-blue-500",
  },
  {
    id: 4,
    title: "🦄 Unicorn Forest",
    description: "A unicorn protects the rainbow forest.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    color: "text-purple-500",
  },
  {
    id: 5,
    title: "🐼 Panda Dreams",
    description: "A panda searches for happiness.",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
    color: "text-green-600",
  },
]

export const storiesData = [
  {
    id: 1,
    title: "🦁 Brave Lion",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    pages: [
      {
        audio: story1,
        sentences: [
          {
            text: "The little rabbit woke up in the green forest.",
            words: [
              { text: "The", start: 0, end: 0.4 },
              { text: "little", start: 0.4, end: 0.9 },
              { text: "rabbit", start: 0.9, end: 1.4 },
              { text: "woke", start: 1.4, end: 1.8 },
              { text: "up", start: 1.8, end: 2.2 },
              { text: "in", start: 2.2, end: 2.6 },
              { text: "the", start: 2.6, end: 3.0 },
              { text: "green", start: 3.0, end: 3.5 },
              { text: "forest.", start: 3.5, end: 4.2 },
            ],
          },
          {
            text: "He saw the sun shining through the tall trees.",
            words: [
              { text: "He", start: 4.3, end: 4.6 },
              { text: "saw", start: 4.6, end: 4.9 },
              { text: "the", start: 4.9, end: 5.1 },
              { text: "sun", start: 5.1, end: 5.4 },
              { text: "shining", start: 5.4, end: 5.9 },
            ],
          },
          {
            text: "A gentle wind moved the soft leaves.",
            words: [
              { text: "A", start: 6.0, end: 6.2 },
              { text: "gentle", start: 6.2, end: 6.6 },
              { text: "wind", start: 6.6, end: 7.0 },
              { text: "moved", start: 7.0, end: 7.4 },
              { text: "leaves.", start: 7.4, end: 7.9 },
            ],
          },
        ],
      },
      {
        audio: story2,
        sentences: [
          {
            text: "The rabbit met a small brown squirrel on a branch.",
            words: [
              { text: "The", start: 0, end: 0.4 },
              { text: "rabbit", start: 0.4, end: 0.9 },
              { text: "met", start: 0.9, end: 1.2 },
              { text: "a", start: 1.2, end: 1.4 },
              { text: "squirrel", start: 1.4, end: 2.0 },
            ],
          },
          {
            text: "They shared some sweet berries together.",
            words: [
              { text: "They", start: 2.0, end: 2.4 },
              { text: "shared", start: 2.4, end: 2.8 },
              { text: "berries", start: 2.8, end: 3.2 },
            ],
          },
          {
            text: "They became happy friends in the forest.",
            words: [
              { text: "They", start: 3.2, end: 3.5 },
              { text: "became", start: 3.5, end: 3.9 },
              { text: "friends.", start: 3.9, end: 4.4 },
            ],
          },
        ],
      },
      {
        audio: story3,
        sentences: [
          {
            text: "A big rain started falling in the evening sky.",
            words: [
              { text: "A", start: 0, end: 0.3 },
              { text: "big", start: 0.3, end: 0.7 },
              { text: "rain", start: 0.7, end: 1.1 },
              { text: "started", start: 1.1, end: 1.7 },
              { text: "falling.", start: 1.7, end: 2.4 },
            ],
          },
          {
            text: "The rabbit and squirrel ran into a cozy tree hole.",
            words: [
              { text: "The", start: 2.4, end: 2.7 },
              { text: "rabbit", start: 2.7, end: 3.1 },
              { text: "ran", start: 3.1, end: 3.5 },
              { text: "hole.", start: 3.5, end: 4.0 },
            ],
          },
          {
            text: "They stayed safe and listened to the rain together.",
            words: [
              { text: "They", start: 4.0, end: 4.3 },
              { text: "stayed", start: 4.3, end: 4.7 },
              { text: "safe.", start: 4.7, end: 5.2 },
            ],
          },
        ],
      },
    ],
  },
]

export const getStoryById = (id) => storiesData.find((story) => story.id === id)
