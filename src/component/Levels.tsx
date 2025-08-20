interface LevelType {
  title: string;
  id: number;
}

interface LevelsProps {
  levels: LevelType[];
  selectedLevel: LevelType | null;
  setSelectedLevel: (level: LevelType) => void;
}

function Levels({ levels, selectedLevel, setSelectedLevel }: LevelsProps) {
  return (
    <select
      value={selectedLevel?.title}
      onChange={(e) => {
        const selected = levels.find(
          (level: LevelType) => level.title === e.target.value
        );
        setSelectedLevel(selected ?? levels[0]);
      }}
    >
      {levels.map((level: LevelType) => (
        <option value={level.title} key={level.id}>
          {level.title}
        </option>
      ))}
    </select>
  );
}

export default Levels;
