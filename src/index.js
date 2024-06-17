import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
        for each web dev skill that you have,
      customized with props */}
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.pinimg.com/474x/5d/53/86/5d53868a23946f6c65c664d7d62228c0.jpg"
      alt="Frank Reynolds"
    ></img>
  );
}
function Intro() {
  return (
    <div>
      <h1>Frank Reynols</h1>
      <p>
        Entrepenuer, Finicial Wizard, Co-owner of Paddy's Pub and mostly a Man
        of The People. Also known as the Worthog, Trashman or Onglo Gablogian.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Toe Knife Master" color="red" />
      <Skill name="Tax Evasion" color="green" />
      <Skill name="Scheeming" color="purple" />
      <Skill name="Master Manipulator" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}

//
//
//
//
//
//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
