import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface TargetType {
  title: string;
  lessonId: number;
}

function TargetPage() {
  const targets: TargetType[] = useSelector((store) => store.target);
  const { lessonId } = useParams<{ lessonId: string }>();
  return (
    <>
      {targets
        .filter((target: TargetType) => target.lessonId === Number(lessonId))
        .map((target: TargetType) => (
          <div key={target.title}>{target.title}</div>
        ))}
    </>
  );
}

export default TargetPage;
