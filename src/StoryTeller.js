import Show from "./Show";
import TextBox from "./TextBox";
const StoryTeller = ({data,active,setActive}) => {
  return (
    <div className="StoryTeller">
        <Show data={data} active={active}/>
        <TextBox data={data} setActive={setActive} active={active}/>
    </div>);
};

export default StoryTeller;
