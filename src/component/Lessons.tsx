import { Link } from "react-router";

interface LessonType {
  title: string;
  id: number;
  levelId: number;
}

interface PropsType {
  lessons: LessonType[];
  selectedLevelId: number | undefined;
}

function Lessons({ lessons, selectedLevelId }: PropsType) {
  return (
    <div>
      {lessons
        .filter((lesson) => lesson.levelId === selectedLevelId)
        .map((lesson) => (
          <Link
            to={`${lesson.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div key={lesson.id}>{lesson.title}</div>
          </Link>
        ))}
    </div>
  );
}

export default Lessons;
