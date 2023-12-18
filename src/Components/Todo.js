    
    import React, { useState } from 'react';
    import CreateTask  from './CreateTask';
    import './Todo.css';
    // [...]
    function Task({ task, index, completeTask }) {
        return (
            <div
                className="task"
                style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
                {task.title}
                <input type='checkbox' className='checkbox'  onClick={() => completeTask(index)}></input>
                
            </div>
        );
    }
    
  
    function Todo() {
        const [tasks, setTasks] = useState([
            {
                title: "Identify and contextualize the problem",
                completed: false
            },
            {
                title: "Present ideas and changes to team",
                completed: false
            },
            {
                title: "Prepare User Flows",
                completed: false
            },
            {
                title: "Prepare design style guide",
                completed: false
            },
            {
                title: "Delivery stage: test and release",
                completed: false
            }

        ]);

        const [total,settotal]=useState(5);
        const [completecnt,setcompletecnt]=useState(0);
    
        const addTask = title => {
            const newTasks = [...tasks, { title, completed: false }];
            setTasks(newTasks);
            settotal(total+1);
        };
        const handleonclick=(e)=>{
            e.preventDefault();
            var retVal = prompt("Add Task");
            
            addTask(retVal);
            
          }
        const completeTask = index => {
            const newTasks = [...tasks];
            setcompletecnt(completecnt+1);
            newTasks[index].completed = !newTasks[index].completed;
            if(newTasks[index].completed==true)
            setcompletecnt(completecnt+1);
            else
            setcompletecnt(completecnt-1);
            setTasks(newTasks);
        };
    
        return (
            <div className="todo-container">
                <div className="header">TODO</div>
                <div className="tasks">
                <div class="container">
                    <div class="left-content">
      Task list
    </div>
    <div class="right-content">
      
      {completecnt}/{total} done
    </div>
    </div>
    
    <div className='task_list'>
                    {tasks.map((task, index) => (
                        <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        key={index}
                        />
                    ))}
                </div>
                </div>
               
                <div className="create-task" >
                    
                    <button className='btn' onClick={handleonclick}  >+ Add Task</button>
                </div>
            </div>
        );
    }
    
    


    export default Todo;
    
    
