import { DogsItems } from '../../data/indexDogs';
import Slider from '../Slider/Slider'
import style from "./Sliders.module.css";








const Sliders:React.FC = () => {
 
  

    return (
      <div>
        <h1 className='title'>Haz Match</h1>
       {DogsItems?.map((item,index) => {
         return <Slider key={index} {...item} />
       })}  
           </div> 
     
    )


}


export default Sliders;