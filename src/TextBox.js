import { ReactDOM } from "react";
import { Link, useParams} from "react-router-dom";

const TextBox = ({data}) => {

let {scene} = useParams();



try {
  return (
    <div className="TextBox"> 
          <Link to={`../scene/${data[scene - 1]['id'] + 1}`}> 
          <div className="container">
            <div>{data[scene - 1]['text']}</div>
          </div>
          </Link>
      </div>
    )
}catch(err){
  return (
    <div className="TextBox">
    </div>
  )
}
};

export default TextBox;
