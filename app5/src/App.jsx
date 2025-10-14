import { useEffect, useState } from "react"
import AddLanguage from "./components/AddLanguage"
import ShowLanguages from "./components/ShowLanguages"
import { languages } from "./data/languages.js"
import { fetchData } from "../api/test.js"

function App() {

  // let [languageData, setLanguageData] = useState(languages)

  let [responseData, setResponseData] = useState(null)

  useEffect(() => {
    async function getTestData() {
      try {
        let response = await fetchData()
        setResponseData(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getTestData()
  }, [])

  return (
    <>
      <div className='flex justify-center items-center gap-20'>
        {responseData ? <div>
          <h1>
            message: {responseData.message}
          </h1>
          <div>
            <ul>
              <li>name : {responseData.userData.name}</li>
              <li>email : {responseData.userData.email}</li>
            </ul>
          </div>
        </div> : null
        }
      </div>
      {/* <div className="flex justify-center my-10">
        <button onClick={fetchData} className="bg-green-500 p-2 rounded-md text-center">Get Data</button>
      </div> */}
      {/* <AddLanguage languageData={languageData} setLanguageData={setLanguageData} />
      <ShowLanguages languageData={languageData} setLanguageData={setLanguageData} /> */}
    </>
  )
}

export default App
