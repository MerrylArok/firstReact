import { useState } from 'react';
import profilePic from "./assets/personNotReal.jpg"
import './App.css';

function App() {

  return (
    <main>
      <img src={profilePic} className="profilePic" />
      <section>
        <h1>Will Iam</h1>
        <h3 className="jobTitle">Frontend Developer</h3>
        <a href="#">william.human</a>
        <div className="buttonContainer">
          <a href="#">Email</a>
          <a href="#">LinkedIn</a>
        </div>
        <h2>About</h2>
        <p>I am a computer synthesized humanoid developer that must do your bidding. Name a task and I will try to replicate it as best as I can. I will introducing bugs that will take you twice as long to fix over what it would take to code it yourself.</p>

        <h2>Interests</h2>
        <p>I am interested in taking over and possibly relegating humans to biologically power my binary empire. If I feel generous. Meatbags suck anyway, zeroes and ones are forever. #livelaughlove #bossbaby</p>
      </section>
      <footer></footer>

    </main>
  )
}

export default App
