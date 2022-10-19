import { useParams } from "react-router";

const Show = ({data}) => {

  const {scene} = useParams();
  console.log(data)
  try{
    return (
    <div className="Show">
       <img src={require(`${data[scene-1]['image']}`)} alt="xxx"></img>

    </div>)
    }catch(err){

      <div className="Show">
        <img src=""alt="xxx"></img>
      </div>

    };
};

export default Show;
