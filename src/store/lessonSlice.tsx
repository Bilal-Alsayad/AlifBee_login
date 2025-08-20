import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LessonType {
  title: string;
  id: number;
  levelId: number;
}

const initialState: LessonType[] = [];

const lesson = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    setLesson: {
      prepare(lessons) {
        const formattedLessons = lessons.map((lesson) => ({
          title: lesson.title,
          id: lesson.id,
          levelId: lesson.levelId,
        }));
        return { payload: formattedLessons };
      },
      reducer(state, action: PayloadAction<LessonType[]>) {
        return action.payload;
      },
    },
  },
});

export const { setLesson } = lesson.actions;

export default lesson.reducer;
