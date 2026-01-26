import { useState } from 'react'
import githubData from "../../assets/github.json"
import MacWindow from './MacWindow'
import "./github.scss"

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: ""} }) => {
    return <div className="card">

        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {
                data.tags.map((tag, index) => <p className='tag' key={index}>{tag}</p>)
            }
        </div>

        <div className="urls">

            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
    </div>
}

const Github = ({ windowName, setWindowsState, minimizedWindows, setMinimizedWindows}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows}>
       <div className="cards">
           {githubData.map((project, index) => {
               return <GitCard key={index} data={project} />
           })}
        </div> 
    </MacWindow>
  )
}

export default Github