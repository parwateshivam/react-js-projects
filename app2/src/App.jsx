import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import shivaji from "./images/shivaji.jpeg"


function App() {

  return (
    <>
      <h1>hello everyone</h1>
      <Component1 />
      <Component2 image={shivaji} title="shivaji maharaj" desc="leader of maratha empire" />
    </>
  )
}

export default App
