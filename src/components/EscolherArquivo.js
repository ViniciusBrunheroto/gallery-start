import React,{useState} from "react";


function EscolherArquivo(props)
{
  const [ind, setInd] = useState(6)


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
        props.uploadArq(newImag)
  }


  return (
		<input
         type= 'file'
         id='inp1'
         accept='image/*'
         onChange={handleEntry}
         required
     />
   )
  }


  export default EscolherArquivo;
