import {getRandomInteger, getRandomArrayElement} from './util.js';

// Количество описаний фото

const PHOTOS = 25;

const AVATAR_COUNTER = {
  min: 1,
  max: 6
};

const LIKES_COUNTER = {
  min: 15,
  max: 200
};

const COMMENTS_COUNTER = {
  min: 1,
  max: 30
};

// Фразы для комментариев

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Имена для авторов комментариев

const NAMES = [
  'Екатерина Храменкова',
  'Анастасия Яковлева',
  'Юлия Ромашова',
  'Анна Есенова',
  'Павел Бровин',
  'Петр Гореликов',
  'Маргарита Воробьева',
  'Руслан Зайцев',
  'Алина Иванова',
  'Елизавета Игнатьева',
];

// Фразы для описания фотографий

const DESCRIPTIONS = ['Озеро', 'Веселый рис', 'Самолет над океаном', 'Удобное хранение обуви', 'Указатель к морю', 'Вид из окна', 'Новое платье', 'Мы с друзьями', 'Зима', 'Новая машина', 'Поход в горы', 'Дорога к морю', 'Суши с котиком', 'Крутые тапочки', 'Самолёт над облаками', 'Раритетное авто', 'Тапочки с подсветкой', 'Пальмы', 'Мой завтрак', 'Прохладительные напитки', 'Отличная фигура', 'Шиикарный ужин', 'Долгожданное свидание', 'Прогулка с собакой', 'Домашний уют'];

// Для объекта по описанию фотографий

let photoId = 1;
let commentId = 1;

// Получение одного или двух комментариев

const createMessage = () => {
  const message = Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES));
  return Array.from(new Set(message)).join(' ');
};

// Создание объекта для комментариев

const createCommentsArray = () => ({
  id: commentId++,
  avatar:  `img/avatar-${getRandomInteger(AVATAR_COUNTER.min, AVATAR_COUNTER.max)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

// Создание объекта для описания фотографии

const createDescription = () => ({
  id: photoId,
  url: `photos/${photoId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_COUNTER.min, LIKES_COUNTER.max),
  comments: Array.from({length: getRandomInteger(COMMENTS_COUNTER.min, COMMENTS_COUNTER.max)}, createCommentsArray)
});

const createPhotoDescriptions = () => Array.from({length: PHOTOS}, createDescription);

export {createPhotoDescriptions};
