
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, dcrement, increment, showdata, subtract } from './features/counter/counterSlice';

function App() {
  //1 state
  let state = useSelector(state => state);
  let dispatch = useDispatch();

  //2function
  let Increment = ()=>{
    //alert('Increment');
    dispatch(increment());
  }
  let Decrement = ()=>{
    dispatch(dcrement());
  }
  let Add = ()=>{
    dispatch(add(5));
   
  }
  let Subtract = ()=>{
    dispatch(subtract(5));
   
  }
  let Show = ()=>{
    dispatch(showdata());
  }


  //return statment

  return (
    <div className="a_padding">
      <div className="a_nav">
        {console.log(state.rootreduser.value.length)}
        <h1>Current Counter : {state.rootreduser.data}</h1>
      </div>
      <div>
        <button className="button" onClick={()=>{Increment()}}>Increment</button>
        <button className="button" onClick={()=>{Decrement()}}>Decrement</button>
        <button className="button" onClick={()=>{Add()}}>Add 5</button>
        <button className="button" onClick={()=>{Subtract()}}>Subtract 5</button>
      </div>
      <hr />
      <div className="a_show">
      <button onClick={()=>{Show()}}>Show result</button>
     {

    state.rootreduser.value.length > 0 &&
    state.rootreduser.value.map((cv,index,arr)=>{
      return <ul key={index}>
         <li>{cv}</li>
      </ul>

    })

     }
        

      </div>
      
  
      
     
      
    </div>
  );
}

export default App;
