import './App.css'
import FilterButton from './components/FilterButton'
import EscolherArquivo from './components/EscolherArquivo'
import Button from '@mui/material/Button';
import { Home } from '@mui/icons-material';
import { TextField, Checkbox } from '@mui/material';




import {useState} from "react"

function App() {

const [mode,setMode] = useState('light');
const [logo,setLogo] = useState('./pic1.jpg')
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


let images = [
          {
            index: 1,
            src: "./pic1.jpg"
          },
          {
            index: 2,
            src: "./pic2.jpg"
          },
          {
            index: 3,
            src: "./pic3.jpg"
          },
          {
            index: 4,
            src: "./pic4.jpg"
          },
          {
            index: 5,
            src: "./pic5.jpg"
          }
    ]



const [img, setImg] = useState(images)



 function toggleMode(name){
    if (name === 'dark')
    {
        setMode('dark')
    }
    else
    {
      setMode('light')
    }
  }

  function uploadArq(newImg)
  {
    setImg([...img, newImg])
  }


  function handleClick(e)
  {
    setLogo(e.target.src)
  }

  function Teste(){
    alert("Alerta de teste!");
  }

  return (

    <div className="board">

    <div>
      <Home />
    </div>
      <h1>Galeria de Imagens</h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
      <Button size="medium" onClick={Teste} variant="contained">Enviar</Button>

      <div className="full-img">
          <img className="displayed-img" src={logo} />
          <div className="overlay" style={{display: mode === 'light' ? 'none' : 'block' }} ></div>
          <FilterButton toggleMode={toggleMode} />
          <EscolherArquivo uploadArq={uploadArq} />
      </div>

       <div className="thumb-bar">
             {img.map((image)  => (
              <img src={image.src} key={image.index} onClick={handleClick}/>
             ))}
       </div>

    </div>

  );
}

export default App;
