import { IPhoto, IPhotoState, IStoreState } from '@/interfaces';
import axios from 'axios';
import { ActionContext } from 'vuex';

type Context = ActionContext<IPhotoState, IStoreState>;

export default {
  state: (): IPhotoState => ({
    photos: [] as IPhoto[],
    dialogVisible: false,
    currentPhoto: {} as IPhoto,
  }),

  mutations: {
    setPhoto(state: IPhotoState, payload: IPhoto[]) {
      // eslint-disable-next-line no-param-reassign
      state.photos = payload;
    },
    showDialog(state: IPhotoState) {
      // eslint-disable-next-line no-param-reassign
      state.dialogVisible = true;
    },
    hideDialog(state: IPhotoState) {
      // eslint-disable-next-line no-param-reassign
      state.dialogVisible = false;
    },
    setCurrentPhoto(state: IPhotoState, payload: IPhoto) {
      // eslint-disable-next-line no-param-reassign
      state.currentPhoto = payload;
    },
  },
  getters: {
    getAllPhotos(state: IPhotoState): IPhoto[] {
      return state.photos;
    },
    getDialogVisible: (state: IPhotoState) => state.dialogVisible,
    getCurrentPhoto: (state: IPhotoState) => state.currentPhoto,
  },
  actions: {
    fetchPhotos(context: Context) {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then((response: any) => { context.commit('setPhoto', response.data); });
    },
  },
};
