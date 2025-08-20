import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../store/levelSlice";
import { setLesson } from "../store/lessonSlice";
import { setTarget } from "../store/targetSlice";
import Levels from "../component/Levels";
import Lessons from "../component/Lessons";

interface LevelType {
  title: string;
  id: number;
}

interface LessonType {
  title: string;
  id: number;
  levelId: number;
}

export default function LessonsPage() {
  const token = useSelector((store) => store.auth.token);

  const dispatch = useDispatch();

  const levels: LevelType[] = useSelector((store) => store.level);
  const lessons: LessonType[] = useSelector((store) => store.lesson);

  const [selectedLevel, setSelectedLevel] = useState<LevelType | null>(null);

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          "https://dev02.arabeeworld.com/api/v5/syllabus/get_syllabus",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        const data = await res.json();

        dispatch(setLevel(data.body.levels));

        dispatch(setLesson(data.body.lessons));

        dispatch(setTarget(data.body.targets));
      }
      fetchData();
    },
    [token, dispatch]
  );

  useEffect(
    function () {
      setSelectedLevel(levels[0]);
    },
    [levels]
  );

  if (!lessons || lessons.length === 0) {
    return <div>Loading...</div>; // Or you can return null to show nothing
  }
  return (
    <>
      <Levels
        levels={levels}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />
      <Lessons lessons={lessons} selectedLevelId={selectedLevel ? selectedLevel.id : undefined} />
    </>
  );
}
