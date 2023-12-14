import {useState} from 'react'
import './App.css';

function App(props) {

  const [face, setFace] = useState(null);
  const [compteur, setCompteur] = useState(0);
  const [resultat, setResultat] = useState(false);
  const cachee = props.cachee;

  function jouer(){
    let random = Math.floor(Math.random()*6+1);
    if(random == cachee){
      setFace(random)
      setCompteur(compteur+1);
      setResultat(true)
    }else{
      setFace(random)
      setCompteur(compteur+1);
    }
  }

  function initialiser() {
    setFace(null);
    setCompteur(0);
    setResultat(false)
  }

  return (
    <div >
      <h1>Jeux de DE</h1>
      <h2>Face : {face}</h2>
      <h2>Nombre d'essais : {compteur}</h2>
      {
        resultat  ? <div><p>Bravo vous avez trouvez la face cachee</p><button onClick={initialiser}>Initialiser</button></div>
                  : <button onClick={jouer}>jouer</button>
      }
    </div>
  );
}

export default App;
