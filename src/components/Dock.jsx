
import React, { useState } from 'react'
import "./dock.scss"

const Dock = ({ windowsState, setWindowsState, minimizedWindows, setMinimizedWindows }) => {
    const [hoveredIcon, setHoveredIcon] = useState(null)

    const handleWindowClick = (windowName) => {
        if (minimizedWindows.has(windowName)) {
            const newMinimized = new Set(minimizedWindows)
            newMinimized.delete(windowName)
            setMinimizedWindows(newMinimized)
        } else {
            setWindowsState(state => ({ ...state, [windowName]: true }))
        }
    }

    return (
        <footer className='dock' >
            <div
                onMouseEnter={() => setHoveredIcon('github')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleWindowClick('github')}
                className={`icon github ${minimizedWindows.has('github') ? 'minimized' : ''}`}>
                {hoveredIcon === 'github' && <div className="tooltip">{minimizedWindows.has('github') ? 'Restore' : 'Github'}</div>}
                <img src="/doc-icons/github.svg" alt="" />
            </div>
            <div
                onMouseEnter={() => setHoveredIcon('note')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleWindowClick('note')}
                className={`icon note ${minimizedWindows.has('note') ? 'minimized' : ''}`}>
                {hoveredIcon === 'note' && <div className="tooltip">{minimizedWindows.has('note') ? 'Restore' : 'Note'}</div>}
                <img src="/doc-icons/note.svg" alt="" />
            </div>
            <div
                onMouseEnter={() => setHoveredIcon('resume')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleWindowClick('resume')}
                className={`icon pdf ${minimizedWindows.has('resume') ? 'minimized' : ''}`}>
                {hoveredIcon === 'resume' && <div className="tooltip">{minimizedWindows.has('resume') ? 'Restore' : 'Resume'}</div>}
                <img src="/doc-icons/pdf.svg" alt="" />
            </div>
            <div
                onMouseEnter={() => setHoveredIcon('calendar')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
                className="icon calender">
                {hoveredIcon === 'calendar' && <div className="tooltip">Calendar</div>}
                <img src="/doc-icons/calender.svg" alt="" />
            </div>
            <div
                onMouseEnter={() => setHoveredIcon('spotify')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleWindowClick('spotify')}
                className={`icon spotify ${minimizedWindows.has('spotify') ? 'minimized' : ''}`}>
                {hoveredIcon === 'spotify' && <div className="tooltip">{minimizedWindows.has('spotify') ? 'Restore' : 'Spotify'}</div>}
                <img src="/doc-icons/spotify.svg" alt="" />
            </div>
            <div
                onMouseEnter={() => setHoveredIcon('mail')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={()=>{window.open("mailto:himanshu@example.com","_blank")}}
                className="icon mail">
                {hoveredIcon === 'mail' && <div className="tooltip">Mail</div>}
                <img src="/doc-icons/mail.svg" alt="" />
            </div>
            <div 
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={()=>{window.open("https://www.linkedin.com/in/himanshu-gautam-48195b363/","_blank")}}
                className="icon link">
                {hoveredIcon === 'linkedin' && <div className="tooltip">LinkedIn</div>}
                <img src="/doc-icons/link.svg" alt="" />
            </div>
            <div
                onMouseEnter={() => setHoveredIcon('cli')}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={() => handleWindowClick('cli')}
                className={`icon cli ${minimizedWindows.has('cli') ? 'minimized' : ''}`}>
                {hoveredIcon === 'cli' && <div className="tooltip">{minimizedWindows.has('cli') ? 'Restore' : 'Terminal'}</div>}
                <img src="/doc-icons/cli.svg" alt="" />
            </div>
        </footer>
    )
}

export default Dock
