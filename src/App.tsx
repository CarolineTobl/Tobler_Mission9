import React from "react";
import "./App.css";
import teamsData from "./teams.json";
import { Team } from "./types"; // Imported Team interface

function Header() {
  return (
    <header className="App-header">
      <h1 className="App-title">College Basketball Teams</h1>
      <h6>View all your Favorite Teams.</h6>
    </header>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>Thank you for viewing my website. I appreciate you coming here.</p>
    </footer>
  );
}

function TeamList() {
  return (
    <div className="team-grid">
      {teamsData.teams.map((team: Team) => (
        <div className="team-card" key={team.tid}>
          <div className="team-info">
            <div className="team-name">{team.school}</div>
            <div className="team-location">
              {team.city}, {team.state}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-content">
        <TeamList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
