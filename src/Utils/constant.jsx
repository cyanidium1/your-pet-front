import { useDispatch } from 'react-redux';
import {
  getAllNoticesThunk,
  getMyAdsThunk,
  getMyFavoriteAdsThunk,
} from 'redux/notices/noticeOperations';

export const filteredNotice = {
  byage: ['up to 1 year', 'up to 2 year', 'from 2 years'],
  bygender: ['female', 'male'],
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
