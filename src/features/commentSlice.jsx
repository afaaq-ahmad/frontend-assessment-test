import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "comments",
  initialState: { comments: [], replies: [] },
  reducers: {
    uploadComment: (state, action) => {
      state.comments = action?.payload;
    },
    addAComment: (state, action) => {
      state?.comments?.push(action?.payload);
    },
    uploadReply: (state, action) => {
      state.reply = action?.payload;
    },
    deleteComment: (state, action) => {
      state?.comments?.splice(
        state?.comments?.findIndex((comment) => comment.id === action?.payload),
        1
      );
    },
    deleteReply: (state, action) => {
      state?.replies?.splice(
        state?.replies?.findIndex((reply) => reply.id === action?.payload),
        1
      );
    },
  },
});

export const {
  uploadComment,
  uploadReply,
  deleteComment,
  deleteReply,
  addAComment,
} = listSlice?.actions;

export const selectComments = (state) => {
  return state?.lists?.comments;
};

export const selectReplies = (state) => {
  return state?.lists?.replies;
};

export default listSlice?.reducer;
