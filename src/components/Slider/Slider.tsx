import {Link} from "react-router-dom";

interface Props{
    id:number;
    title: string;
    image: string;
}


const Slider: React.FC<Props> = ({id,title,image})=> {
       return (
         <div>
            <div>
                <Link to={`/detail/${id}`}>
                <p>{title}</p>
                <img src={image}/>
                </Link>
            </div>
         </div>
       )
   


}


export default Slider;