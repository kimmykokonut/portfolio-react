import bridge from './../assets/images/bridge.jpg';

function Hero() {
  
  return (
    <>
    <p>Ciao! My name is</p>
    <h1>Kim Robinson</h1>
      <h2>full-stack developer | software adventurous | forager</h2>
    <p>Javascript | React | Html | CSS | Bootstrap | MUI | Git</p>
    <p>Learning: C# | .net</p>
    <img src={bridge} alt='Tillicum bridge at night'/>
    </>
  )
}
export default Hero;