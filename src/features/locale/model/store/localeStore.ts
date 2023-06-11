import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Locales, defaultLocale } from '../../configs/settings';

const localeAdapter = createEntityAdapter();

interface LocaleState {
  lang: Locales;
}

const initialState: LocaleState = {
  lang: defaultLocale,
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<Locales>) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = localeSlice.actions;

export const { selectAll } = localeAdapter.getSelectors(
  (state: any) => state.locale,
);

export default localeSlice.reducer;
