import React from 'react'
import data from '../Data/data'

const App = () => {
  return (
    <div id="main">
        <ol>
            {
                data.map((item, index)=>{
                    return(
                        <li key={`relativeListItem${index+1}`}>{item}</li>
                    )
                })
            }
         </ol>
    </div>
  )
}

export default App
