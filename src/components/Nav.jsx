import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = ({ windowsState = {}, setWindowsState = () => {} }) => {
    const toggleWindow = (windowName) => {
        setWindowsState(state => ({ ...state, [windowName]: !state[windowName] }))
    }

    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./nav-icon/apple.svg" alt=""  />
                </div>

                <div className="nav-item">
                    <p>Himanshu Gautam</p>
                </div>
                <div className="nav-item">
                    <p>Files</p>
                </div>
                <div className="nav-item dropdown">
                    <p>Window</p>
                    <div className="dropdown-menu">
                        <div onClick={() => toggleWindow('github')} className="dropdown-item">
                            {windowsState.github ? '✓' : ''} Github
                        </div>
                        <div onClick={() => toggleWindow('resume')} className="dropdown-item">
                            {windowsState.resume ? '✓' : ''} Resume
                        </div>
                        <div onClick={() => toggleWindow('note')} className="dropdown-item">
                            {windowsState.note ? '✓' : ''} Note
                        </div>
                        <div onClick={() => toggleWindow('spotify')} className="dropdown-item">
                            {windowsState.spotify ? '✓' : ''} Spotify
                        </div>
                        <div onClick={() => toggleWindow('cli')} className="dropdown-item">
                            {windowsState.cli ? '✓' : ''} CLI
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <p>Terminal</p>
                </div>

            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="./nav-icon/wifi.svg" alt="" />
                </div>
                <div className="nav-item">
                    <DateTime/>
                </div>
                    
            </div>
        </nav>
    )
}

export default Nav

