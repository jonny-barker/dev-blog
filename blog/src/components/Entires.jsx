import { entries } from "../data/entries";

export const Entries = () => {
  return (
    <div id="entries">
      {entries.map((entry) => {
        return <div>
            <h2>{entry.title}</h2>
            <h3>{entry.id}</h3>
            <p>{entry.body}</p>
        </div>;
      })}
    </div>
  );
};
