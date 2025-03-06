import "./App.css";
import CollegeBasketballTeams from "./assets/CollegeBasketballTeams.json";

function Heading() {
  return <h1>NCAA Basketball Top Colleges</h1>;
}

function TeamCard({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>{school}</h2>
      <p>The {name}</p>
      <p>
        {city}, {state}
      </p>
    </>
  );
}

function TeamCardList() {
  return (
    <>
      {CollegeBasketballTeams.teams.map((team) => (
        <TeamCard
          key={team.school}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Heading />
      <TeamCardList />
    </>
  );
}

export default App;
