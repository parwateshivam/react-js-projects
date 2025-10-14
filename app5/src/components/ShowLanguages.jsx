import "../styles/style.scss"

const ShowLanguages = ({ languageData }) => {
  return (
    <>
      <h1 className='text-center bg-red-400 p-3 my-5'>Languages</h1>
      <div className="container">
        <div className="grid-container">
          {
            languageData.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2 border p-3 border-gray-500 rounded-lg shadow-md">
                  <div>
                    <span>Title : </span>
                    <span>{item.title}</span>
                  </div>
                  <div className="border p-3 rounded-md">
                    <span>Scope : </span>
                    <div className="flex gap-1">
                      {
                        item.scope.map((element, index) => {
                          return (
                            <span className="bg-blue-200 flex justify-center items-center rounded-lg p-1" key={index}>{element}</span>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div>
                    <span>Duration : </span>
                    <span>{item.duration} weeks</span>
                  </div>
                  <div>
                    <span>Difficulty : </span>
                    <span className={item.difficulties === "Hard" ? "bg-red-500 rounded p-1" : item.difficulties === "Medium" ? "bg-yellow-500 rounded p-1" : item.difficulties === "Easy" ? "bg-green-500 rounded p-1" : null}>{item.difficulties}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ShowLanguages
