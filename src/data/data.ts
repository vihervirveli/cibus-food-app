import { RecipeType } from '../models/models';

const foods: RecipeType[] = [
  {
    index: 1,
    title: 'Roasted chickpeas',
    time: 30,
    preview:
      'This dish is easy to make and is a great side dish to add bulk to a meal',
    ingredients: [
      {
        amount: '3 dl',
        ingredient: 'chick pea'
      },
      {
        amount: 'sprinkle',
        ingredient: 'vegetable oil'
      },
      {
        amount: 'sprinkle',
        ingredient: 'ginger paste'
      },

      { amount: 'sprinkle', ingredient: 'garam masala' },
      { amount: 'sprinkle', ingredient: 'cumin' },
      {
        amount: 'sprinkle',
        ingredient: 'salt'
      }
    ],
    instructions:
      'Place on oven tray, slather with oil and sprinkle on the spices. Bake for 15 minutes in 200 °C / 392 F',
    ratings: 5,
    tags: ['chick pea', 'chickpea'],
    img: 'https://64.media.tumblr.com/3530a1beb07f1003630482bc36bfd367/8f137f787df509ae-75/s2048x3072/a60b20d97d1ca2318ad1b9e4cc8aa8d0556e7bb3.jpg'
  },
  {
    index: 2,
    title: 'Dipped vegetables',
    time: 30,
    preview: 'Great for snacking in a more healthy way and to get more fiber',
    ingredients: [
      {
        amount: '1 bag',
        ingredient: 'dip'
      },
      {
        amount: '200g',
        ingredient: 'sour cream'
      },
      {
        amount: '1',
        ingredient: 'paprica'
      },
      { amount: '1', ingredient: 'cucumber' },
      { amount: '2', ingredient: 'carrot' },
      { amount: '1', ingredient: 'zucchini' }
    ],
    instructions:
      'Make the dip and put it in the fridge. Cut up all vegetables. Dip vegetables in dip.',
    ratings: 3,
    tags: ['dip', 'sour cream', 'paprica', 'cucumber', 'carrot', 'zucchini'],
    img: 'https://64.media.tumblr.com/36e70dab35170fe4897af7321840f64e/8f137f787df509ae-af/s2048x3072/e0612a3499b110615259365f310a9e28159f7934.jpg'
  }
];

export default foods;
