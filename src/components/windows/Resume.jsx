import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState, minimizedWindows, setMinimizedWindows }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows}>
            <div className="resume-window">
                <embed src="/resume.pdf" frameBorder="0"></embed>
            </div>
        </MacWindow>
    )
}

export default Resume