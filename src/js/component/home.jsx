import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  
	const[task, setTask]= useState('');
  const [list, setList]=useState([]);
  const newItem=(task)=>{
    return{
      done:false,
      label:task
    }
  }
console.log(newItem);

const handleSubmit =(e)=>{
  e.preventDefault();
  const item =newItem(task);

  console.log(item);
}
const handleDelete =(e)=>{

}

useEffect(()=> {
  fetch('https://assets.breatheco.de/apis/fake/todos/user/carlostbanks')
  .then (res =>{
    return res.json();
  })
  .then(data =>{
    setList(data);
    console.log(data);
  })
},[])
const listItems=list.map((item,index)=>{
  return(
  <li key={index}
  >{item.label}</li>)
})
	return (
    <div className="container"> 
      <div className="todoList">  
       {/* <div className="home">
       {task && <TaskList task={task} title="All Tasks!" handleDelete={handleDelete} />}
       </div> */}



  
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>

          <input type="text"
          required 
		  placeholder="What needs to be done?"
		  value={task}
		  onChange={(e)=> setTask(e.target.value)}
          />
        </form>
        <form>
          
          
          <ul type="li"
             placeholder="No tasks, add a task"
             value={task}
             onKeyDown={(e)=>setTask(e.target.value)}
             >
             {listItems}
             </ul>
            </form>


    </div>
    </div>
			
			
  );
  };
  
	


export default Home;
