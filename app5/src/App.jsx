import { useState } from "react"
import AddLanguage from "./components/AddLanguage"
import ShowLanguages from "./components/ShowLanguages"
import { languages } from "./data/languages.js"
// import axios from "axios"

function App() {

  // async function fetchData() {
  //   try {
  //     let result = await axios({
  //       method : "GET",
  //       url : "http://localhost:7001/test/hello"
  //     })
  //     console.log(result.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  let [languageData, setLanguageData] = useState(languages)

  return (
    <>
      {/* <div className="flex justify-center my-10">
        <button onClick={fetchData} className="bg-green-500 p-2 rounded-md text-center">Get Data</button>
      </div> */}
      <AddLanguage languageData={languageData} setLanguageData={setLanguageData} />
      <ShowLanguages languageData={languageData} setLanguageData={setLanguageData} />
    </>
  )
}

export default App
