import React from 'react'
// import data from '../Data/data'

const App = () => {
  return (
    <div id="main">
        <ol id='relativeList'>
            {/* {
                data.map((item, index)=>{
                    return(
                        <li key={`relativeListItem${index+1}`}>{item}</li>
                    )
                })
            } */}
            <li key="relativeListItem1" id='relativeListItem1'>Moter</li>
            <li key="relativeListItem2" id='relativeListItem2'>Father</li>
            <li key="relativeListItem3" id='relativeListItem3'>Brother</li>
            <li key="relativeListItem4" id='relativeListItem4'>Sister</li>
            <li key="relativeListItem5" id='relativeListItem5'>Cousin</li>
         </ol>
    </div>
  )
}

export default App
