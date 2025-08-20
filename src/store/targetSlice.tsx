import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TargetType {
  title: string;
  lessonId: number;
}

const initialState: TargetType[] = [];

const target = createSlice({
  name: "target",
  initialState,
  reducers: {
    setTarget: {
      prepare(targets) {
        const formattedTaegets = targets.map((target) => ({
          title: target.title,
          lessonId: target.lessonId,
        }));

        return { payload: formattedTaegets };
      },
      reducer(state, action: PayloadAction<TargetType[]>) {
        return action.payload;
      },
    },
  },
});

export const { setTarget } = target.actions;

export default target.reducer;
