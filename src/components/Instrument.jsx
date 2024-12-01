import './Instrument.css';
//import { AddCartBtn } from './AddCartBtn';


const Instrument = (props) => {
  return (

    <>
 
  
 
  <div>

    
    <div> 
    <div className='instrument'>

       <img className='instrument_img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXG6E4iJa_MLsX6u7HsMWenn2j80yO0eN-w&usqp=CAU' alt='instrument'/>
       
       
       <h2 className='instrument_name'>{props.name}</h2>
       
    </div>
  
    </div>

    
  
    <div>

    <div className='instrument'>

     <img className='instrument_img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXG6E4iJa_MLsX6u7HsMWenn2j80yO0eN-w&usqp=CAU' alt='instrument'/>

      <h2 className='instrument_name'>{props.name}</h2>
      
    </div>
    </div>
    

    </div>

   </>
  )
}

export {Instrument}