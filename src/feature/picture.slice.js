import { createSlice } from "@reduxjs/toolkit";

export const pictureSlice = createSlice({
  name: "picture",
  initialState: {
    picture: null,
  },
  reducers: {
    setPictureData: (state, { payload }) => {
      state.picture = payload;
    },
    addPicture: (state, action) => {
      state.picture.push(action.payload);
      // dans redux on aurait fait = [..., action.payload]
    },
    editPicture: (state, { payload }) => {
      state.picture = state.picture.map((pic) => {
        if (pic.id === payload[1]) {
          return {
            ...pic,
            artist: payload[0],
          };
        } else {
          return pic;
        }
      });
    },
    deletePicture: (state, { payload }) => {
      state.picture = state.picture.filter((pic) => pic.id !== payload);
    },
  },
});

export const { setPictureData, addPicture, editPicture, deletePicture } =
  pictureSlice.actions;
export default pictureSlice.reducer;
