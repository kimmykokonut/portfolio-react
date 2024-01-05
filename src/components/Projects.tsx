import nps from './../assets/images/park.png';
import praline from './../assets/images/praline.png';
import game from './../assets/images/game.png';

function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <p>an evolving list of projects as I learn and add to my skillset</p>
      <hr />
      <h4>National Park Finder</h4>
      <p>A pair project to explore API calls and MUI in React</p>
      <a href="https://github.com/kimmykokonut/national-park-api">Github Link</a>
      {/* to add: gh-pages */}
      <img height="300" src={nps} alt="National Park Finder Application" />
      <p> React | Typescript | Material UI | Vite</p>
      <hr />
      <h4>Inventory Tracker</h4>
      <p>Independent project that tracks inventory with CRUD functionality</p>
      <a href="https://kimmykokonut.github.io/inventory-tracker-cra-redux/">GitHub Pages Link</a>
      <img height="300" src={praline} alt="Inventory tracker application" />
      <p> React | Javascript | Bootstrap | Redux</p>
<hr />
      <h4>Not Wordle</h4>
      <p>A pair project to learn React and refactor class to functional components and add Redux to manage state</p>
      <a href="https://kimmykokonut.github.io/word-puzzle/">You can play the game!</a>
      <img height="300" src={game} alt="Word Puzzle Game"/>
      <p> React | Javascript | CSS | Redux</p>
      <hr />
    </>
  )
}
export default Projects;