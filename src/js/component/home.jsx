import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  
	const[task, setTask]= useState('');
  const [list, setList]=useState([]);
  const newItem=(task)=>{
    return{
      label:task,
      done:false,
    
      
    }
  }
console.log(newItem);

const handleSubmit =(e)=>{
  e.preventDefault();
  const item =newItem(task);
setList([item,...list])


  

};
const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    if (inputValue.trim() !== '') {
      setTask([...list, inputValue.trim()]);
      setInputValue('');
    }
  }
};
const handleDeleteTask = (index) => {
  const updatedTasks = [...list];
  const filteredTasks= updatedTasks.filter((item,idx)=> idx!==index);
  setList(filteredTasks);
};


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

   
	return (
    <div className="container"> 
      <div className="todoList"> 

         <h1>todos</h1>
        <form onSubmit={handleSubmit}>

          <input type="text"
          required 
		  placeholder="What needs to be done?"
		  value={task}
		  onChange={(e)=> setTask(e.target.value)}
          />
          
        </form>
          <ul>
          {list.map((task,index)=>{
            return(
              <li
                  key={index}>
                {task.label}
                <button className="delete-button"
                        onClick={()=>handleDeleteTask(index)}>
                  x
                </button>
              </li>
            )
          })}
            
         
            <p>{list.length} items left</p>
        
             </ul>
            


    </div>
    </div>
			
			
  );
  };
  
	


export default Home;
