import React, {useEffect,useState} from 'react';
import  Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindow from './MacWindow'
import "./note.scss"


const Note = ({ windowName, setWindowsState, minimizedWindows, setMinimizedWindows }) => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [])



    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows}>
            <div className="note-window">
            { markdown ? <SyntaxHighlighter language='typescript' style={docco}>{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
            </div>
        </MacWindow>
        
    )
}

export default Note


