import { languages } from '../data/languages.js'
import "../styles/style.scss"

const ShowLanguages = () => {
  return (
    <>
      <h1 className='text-center bg-red-400 p-3 my-5'>Languages</h1>
      <div className="container">
        <div className="grid-container">
          {
            languages.map((item, index) => {
              return (
                <div key={index} className='card flex flex-col gap-2'>
                  <h2 className='text-xl'>Title : <span className='text-xl'>{item.title}</span></h2>
                  <div className='scope'>
                    <span className='text-xl'>Scope :</span>
                    <div className='scope-container'>
                      {
                        item.scope.map((element, index) => {
                          return (
                            <span key={index}>{element}</span>
                          )
                        })
                      }
                    </div>
                  </div>
                  <h4 className='text-xl'>Duration : <span className='text-xl'>{item.duration} weeks</span></h4>
                  <h4 className='text-xl'>
                    Difficulties : <span className={item.difficulties == "Hard" ? "bg-red-500 p-1 rounded" : item.difficulties == "Medium" ? "bg-yellow-500 p-1 rounded" : item.difficulties == "Easy" ? "bg-green-500 p-1 rounded" : null}>
                      {item.difficulties}
                    </span>
                  </h4>
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
