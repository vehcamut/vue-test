export interface IPhoto {
  id: number;
  title: string;
  url: string;
}

export interface IPhotoState {
  dialogVisible: boolean;
  photos: IPhoto[];
  currentPhoto: IPhoto;
}

export interface IStoreState {
  photoModule: IPhotoState;
}
