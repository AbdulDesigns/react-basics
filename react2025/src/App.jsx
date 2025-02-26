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
  let [count, setCount] = useState("");
  function formHandler(e) {
    e.preventDefault();
    console.log(count);
    setCount("");
  }
  return (
    <>
      <h1>{count}</h1>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <form action="/" onSubmit={formHandler}>
        <input
          type="text"
          value={count}
          placeholder="enter fullname"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <br />
        <button type="submit">submit</button>
      </form>

      <button
        className="bg-blue-500 text-white p-4 rounded-lg mx-4 my-4 cursor-pointer"
        onClick={() => {
          console.log(i);
          setCount(count + 10);
        }}
      >
        click me
      </button>
    </>
  );
};

export default App;
