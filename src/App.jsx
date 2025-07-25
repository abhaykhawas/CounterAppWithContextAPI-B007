// import { useState, useEffect } from 'react'
// import './App.css'

// function Button() {
//   return(

//   )
// }

// function App() {

//   const [counter, setCounter] = useState(0)
 
//   return (
//     <>
//       <button onClick={() => setCounter(counter+1)}>{counter}</button>
//     </>
//   )
// }

// export default App






// Example of props drilling

// function GGChild(props) {
//   return(
//     <h2>Hello {props.name}</h2>
//   )
// }



// function GChild(props) {
//   return(
//     <GGChild name={props.name}/>
//   )
// }



// function Child(props) {
//   return (
//     <GChild name={props.name}/>
//   )
// }



// function App () {
//   return(
//     <Child name={'Abhay'}/>
//   )
// }

// export default App











// Solution of props drilling (with Context API)
import { useContext } from 'react'
import DataContext from './dataContext'

function GGChild() {
  const data = useContext(DataContext)
  console.log(data)
  return(
    <h2>Hello {data.name} from Grand Grand Child</h2>
  )
}



function GChild() {
  return(
    <GGChild/>
  )
}



function Child() {
  return (
    <GChild />
  )
}



function App () {
  const data = useContext(DataContext)
  return(
    <>
      <Child />
      <button onClick={() => data.setName('John')}>Change Name</button>
    </>
  )
}

export default App









