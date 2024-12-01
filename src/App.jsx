import './App.css';
import {InstrumentContainer} from './components/InstrumentContainer';
import { Instrument } from './components/Instrument';
import data from './instruments.json';

const App = () => {
    return(

        <InstrumentContainer>   
           {data.map( instrument => 
                <Instrument 
                key= {instrument.name}
                name= {instrument.name}
                price= {instrument.price}
                /> )}
        </InstrumentContainer>
    )
}

export default App