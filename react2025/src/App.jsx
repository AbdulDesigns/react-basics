import { useState } from "react";

// function App() {
//   let i = 0;
//   function counter() {
//     console.log("hello", i++);
//   }
//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>enter the value of the data</p>
//       <input type="text" placeholder="enter the value" id="name" />
//       <button type="button" onClick={counter}>
//         click me
//       </button>
//     </div>
//   );
// }

// export default App;

const App = () => {
  let i = 1;
  let [count, setCount] = useState(i);
  return (
    <div>
      <h1>{count}</h1>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <button
        onClick={() => {
          console.log(i);
          setCount(count + 10);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default App;
