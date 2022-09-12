import { IStoreState } from '@/interfaces';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {

  interface ComponentCustomProperties {
    $store: Store<IStoreState>;
  }
}
