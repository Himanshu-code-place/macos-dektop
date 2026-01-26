import React, { useState, useEffect } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({children, width = "40vw", height = "50vh", windowName, setWindowsState, getRandomPosition, minimizedWindows, setMinimizedWindows }) => {
    const [randomPos, setRandomPos] = useState({ x: 300, y: 200 })
    const [isMaximized, setIsMaximized] = useState(false)
    const isMinimized = minimizedWindows.has(windowName)

    useEffect(() => {
        if (getRandomPosition) {
            setRandomPos(getRandomPosition())
        }
    }, [])

    const handleMinimize = () => {
        const newMinimized = new Set(minimizedWindows)
        newMinimized.add(windowName)
        setMinimizedWindows(newMinimized)
    }

    const handleMaximize = () => {
        setIsMaximized(!isMaximized)
    }

    if (isMinimized) {
        return null
    }

    return (
        <Rnd
            default={{
                width: isMaximized ? "100vw" : width,
                height: isMaximized ? "100vh" : height,
                x: isMaximized ? 0 : randomPos.x,
                y: isMaximized ? 0 : randomPos.y,
            }}
            position={isMaximized ? { x: 0, y: 0 } : undefined}
            size={isMaximized ? { width: "100vw", height: "100vh" } : undefined}
            bounds="parent"
            enableResizing={false}
            onDragStop={(e, d) => {
                if (!isMaximized) {
                    setRandomPos({ x: d.x, y: d.y })
                }
            }}
        >
            <div className="window" style={{ height: isMaximized ? "100vh" : "100%" }}>
                <div className="nav">
                    <div className="dots">
                        <div 
                            onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} 
                            className="dot red"
                            title="Close"
                        ></div>
                        
                        <div 
                            onClick={handleMinimize} 
                            className="dot yellow"
                            title="Minimize"
                            style={{ cursor: 'pointer' }}
                        ></div>
                        <div 
                            onClick={handleMaximize} 
                            className="dot green"
                            title={isMaximized ? "Restore" : "Maximize"}
                            style={{ cursor: 'pointer' }}
                        ></div>
                    </div>

                    <div className="title"><p>himanshugautam -@52</p></div>

                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow