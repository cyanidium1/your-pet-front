import { useDispatch } from 'react-redux';
import {
  getAllNoticesThunk,
  getMyAdsThunk,
  getMyFavoriteAdsThunk,
} from 'redux/notices/noticeOperations';

export const filteredNotice = {
  age: { 'up to 1 year': 1, 'up to 2 year': 2, 'from 2 years': 3 },
  gender: { female: 'female', male: 'male' },
};

export const tags = ['sell', 'lost/found', 'in good hands'];
export const tagsAuth = [
  'sell',
  'lost/found',
  'in good hands',
  'favorite ads',
  'my ads',
];
export const tagsLinks = [
  'sell',
  'lost-found',
  'in-good-hands',
  'favorite-ads',
  'my-ads',
];
export const tagsLinkAuth = tagsLinks.slice(-2);
export const tagsLinkNotAuth = tagsLinks.slice(0, 3);

export const routerThunk = {
  sell: getAllNoticesThunk('sell'),
  'lost-found': getAllNoticesThunk('lost-found'),
  'in-good-hands': getAllNoticesThunk('in-good-hands'),
  'favorite-ads': getMyFavoriteAdsThunk(),
  'my-ads': getMyAdsThunk(),
};
