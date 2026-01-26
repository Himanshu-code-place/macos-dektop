import React, { useState } from 'react'
import MacWindow from './MacWindow'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState, minimizedWindows, setMinimizedWindows }) => {
    const [output, setOutput] = useState([
        { text: "Welcome to My Portfolio CLI! ", color: "#ff9100", isBig: true },
        { text: "", color: "#ffffff" },
        { text: "Type 'help' to see available commands", color: "#888888" },
        { text: "Try: about, skills, projects, contact, clear", color: "#00ccff" },
        { text: "", color: "#ffffff" }
    ])
    const [input, setInput] = useState('')

    const commands = {
        help: () => [
            { text: "Available commands:", color: "#ffff00" },
            { text: "  about     - Learn about me", color: "#00ccff" },
            { text: "  skills    - View my technical skills", color: "#00ccff" },
            { text: "  projects  - Check out my work", color: "#00ccff" },
            { text: "  contact   - Get in touch", color: "#00ccff" },
            { text: "  clear     - Clear the terminal", color: "#00ccff" }
        ],
        about: () => [{ text: "I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.", color: "#ffffff" }],
        skills: () => [
            { text: "Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS", color: "#ff00ff" },
            { text: "Backend: Node.js, Express, Python, Django", color: "#ff00ff" },
            { text: "Databases: MongoDB, PostgreSQL, MySQL", color: "#ff00ff" },
            { text: "Tools: Git, Docker, Webpack, Vite", color: "#ff00ff" },
            { text: "Cloud: AWS, Azure, Heroku", color: "#ff00ff" }
        ],
        projects: () => [
            { text: "1. Portfolio Website - React + Vite", color: "#ffffff" },
            { text: "2. E-commerce Platform - MERN Stack", color: "#ffffff" },
            { text: "3. Task Management App - Next.js", color: "#fafaf5" },
            { text: "4. Real-time Chat App - Socket.io", color: "#f5f2f2" },
            { text: "5. Data Dashboard - React + Chart.js", color: "#f0f0f3" }
        ],
        contact: () => [
            { text: "Email: contact@example.com", color: "#ffaa00" },
            { text: "Phone: +1 (555) 123-4567", color: "#ffaa00" },
            { text: "Location: San Francisco, CA", color: "#ffaa00" }
        ],
        clear: () => [],
        echo: (...args) => [{ text: args.join(' '), color: "#ffffff" }]
    }

    const handleCommand = (cmd) => {
        const trimmed = cmd.trim().toLowerCase()
        const [command, ...args] = trimmed.split(' ')
        
        let result = []
        if (commands[command]) {
            result = commands[command](...args)
        } else if (command !== '') {
            result = [{ text: `Command not found: ${command}. Type 'help' for available commands.`, color: "#ff0000" }]
        }

        if (command === 'clear') {
            setOutput([])
        } else {
            setOutput([
                ...output,
                { text: `$ ${cmd}`, color: "#00ff00" },
                ...result
            ])
        }
        setInput('')
    }

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows}>
            <div className="cli-window">
                <div className="cli-output">
                    {output.map((line, i) => (
                        <div 
                            key={i} 
                            className="cli-line" 
                            style={{ 
                                color: line.color,
                                fontSize: line.isBig ? '1.6rem' : '1.1rem',
                                fontWeight: line.isBig ? 'bold' : 'normal',
                                letterSpacing: line.isBig ? '0.5px' : '0px'
                            }}
                        >
                            {line.text}
                        </div>
                    ))}
                </div>
                <div className="cli-input">
                    <span className="prompt">$ </span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleCommand(input)}
                        autoFocus
                    />
                </div>
            </div>
        </MacWindow>
    )
}

export default Cli