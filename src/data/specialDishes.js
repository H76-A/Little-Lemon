import images from './images';

export const specialsDishes = [
  {
    id: Math.random(),
    name: 'Greek Salad',
    price: '$12.99',
    img: images.greekSalad,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: Math.random(),
    name: 'Bruchetta',
    price: '$5.99',
    img: images.brucheta,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil topped with tomatoes and basil.',
  },
  {
    id: Math.random(),
    name: 'Fish Tacos',
    price: '$14.99',
    img: images.fishTacos,
    description:
      'Fish tacos made with mahi-mahi, cabbage slaw and crema from Petco Park, home of MLB’s San Diego Padres. Grilled or fried fish, topped with cabbage slaw and crema.',
  },
];
