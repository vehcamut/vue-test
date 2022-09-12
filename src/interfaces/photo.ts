export interface IPhoto {
  id: number;
  title: string;
  url: string;
}

export interface IPhotoState {
  photos: IPhoto[];
}

export interface IStoreState {
  photoModule: IPhotoState;
}
