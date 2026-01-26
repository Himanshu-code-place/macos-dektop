import React, { useState, useEffect } from 'react'


const DateTime = () => {
    const [dateTime, setDateTime] = useState('')

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()
            const options = {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }
            const formatted = now.toLocaleDateString('en-US', options).toUpperCase().replace(/,/g, '')
            setDateTime(formatted)
        }

        updateDateTime()
        const interval = setInterval(updateDateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>{dateTime}</div>
    )
}

export default DateTime