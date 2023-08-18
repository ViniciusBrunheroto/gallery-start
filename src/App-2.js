import './App.css';
import FilterButton from './components/FilterButton'

import {useState} from "react"

function App() {

const [mode,setMode] = useState('light');
const [logo,setLogo] = useState('./pic1.jpg')
const [ind, setInd] = useState(6)


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



  function handleClick(e)
  {
    setLogo(e.target.src)
  }


  function handleEntry(e)
  {

   const path = e.target.value
   const str = './' + path.slice(12)

console.log(path)
  const newImag = {
          index: ind,
          src: str
        }

      setInd(ind+1)
      img.push(newImag)

      setImg(img)

      console.log(img)
  }


  return (

    <div className="board">

      <h1>Galeria de Imagens</h1>

      <div className="full-img">
          <img className="displayed-img" src={logo} />
          <div className="overlay" style={{display: mode === 'light' ? 'none' : 'block' }} ></div>
          <FilterButton toggleMode={toggleMode} />
          <input type='file' id='inp1' accept='image/*' onChange={handleEntry} required />
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
