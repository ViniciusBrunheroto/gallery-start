import React from "react";


function FilterButton(props)
{

  function handleClick (e) {
    const btnInfo = e.target.getAttribute('class');

    if (btnInfo === 'dark') {
      e.target.setAttribute('class', 'light');
      e.target.textContent = 'Escurecer';
      props.toggleMode('light');
    } else {
      e.target.setAttribute('class', 'dark');
      e.target.textContent = 'Esclarecer';
      props.toggleMode('dark')
    }
  }

	return (
		<button
         type= 'button'
         onClick= {handleClick} >
        <span>Escurecer</span>
     </button>
	)
}


export default FilterButton;

