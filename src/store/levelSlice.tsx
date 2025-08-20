import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LevelType {
  title: string;
  id: number;
}

const initialState: LevelType[] = [];

const level = createSlice({
  name: "level",
  initialState,
  reducers: {
    setLevel: {
      prepare(levels: LevelType[]) {
        const formattedLevels = levels.map((level) => ({
          title: level.title,
          id: level.id,
        }));

        return {
          payload: formattedLevels,
        };
      },
      // 2. The 'reducer' function runs second
      reducer(state, action: PayloadAction<LevelType[]>) {
        return action.payload;
      },
    },
  },
});

export const { setLevel } = level.actions;

export default level.reducer;
