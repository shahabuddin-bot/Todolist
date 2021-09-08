import React, { useState } from "react";
import Todolists from "./Todolists";
const App=()=>{

    const [inputList,setInputList]=useState("");
    const [items,setItems]=useState([]);//defining an aaray

const itemEvent=(event)=>{
    setInputList(event.target.value);

};

const listofItems=()=>{
setItems((olditems)=>{
    return [...olditems,inputList];//updating an arrray
});
setInputList("");//emptying array
}

const deleteItems=(id)=>{
    setItems((olditems)=>{
        return olditems.filter((arrelement,index2)=>{
     return index2!==id;
        })
    })

}
    return(
        <>
<div className="main_div">
<div className="center_div">
<br />
<h1>ToDo lists</h1>
<br />
<input
type="text"
placeholder="Add an items"
value={inputList}
onChange={itemEvent}/>
<button onClick={listofItems}> + </button>
<ol>
    {items.map((itemval,index1) =>{//calling an array one by one
      return  <Todolists 
      key={index1}
      id={index1}
      text={itemval}          
      onSelect={deleteItems}

      />;
    })};
</ol>
</div>
</div>
        </>
    );
}
export default App;