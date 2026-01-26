import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'




function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  const [minimizedWindows, setMinimizedWindows] = useState(new Set())
  
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />
      { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />}
    </main>
  )
}

export default App