import './InstrumentContainer.css'
import { FaUserCircle } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";

const InstrumentContainer = (props) => {
  return (

    <>

    <div class="navegacion">

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul>  
       <li class="listas"> <i class="fa-solid fa-user"></i>
       <FaUserCircle />
      </li>
      <li class="listas"> <i class="fa-solid fa-bag-shopping"></i>
      <IoBagSharp />
      </li>
      </ul>
    </nav>

    </div> 

    <section className="instruments_section">
        <h1 className="instruments_title">Mascotas</h1>
        <div className="instruments_container">
                 {props.children}
        </div>
    </section>
 
    

    </>
  )
}

export {InstrumentContainer}