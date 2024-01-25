import { useState } from "react"


const Landing = () => {
    
    const [name,setName]=useState("");

    const [joined, setJoined] = useState(false);
    
    return (
    <div>
        <input type="text" onChange={(e)=>{
            setName(e.target.value);
        }} />
        <button onClick={()=>{
            setJoined(true);
        }}>
            Join
        </button>
    </div>
  )
}
export default Landing