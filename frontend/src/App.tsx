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
    <div className="bball-card">
      <h2 className="bball-card-school">{school}</h2>
      <div className="bball-inside">
        <p>The {name}</p>
        <p>
          {city}, {state}
        </p>
      </div>
    </div>
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
      <div className="bball-cards">
        <TeamCardList />
      </div>
    </>
  );
}

export default App;
