import {HIDE_LOADER, SHOW_LOADER} from '@redux/actionType';

export const showAppLoader = () => ({
  type: SHOW_LOADER,
});

export const hideAppLoader = () => ({
  type: HIDE_LOADER,
});
