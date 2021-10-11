import React, {useEffect, useState} from "react"

const calculateTime = (startTime) => {
    const time = new Date(startTime)
    const timeNow = Date.now()/1000|0
    return timeNow - time
}

export const TimePassed = ({createdTime}) => {
    const [timeNow, setTimeNow] = useState(0)
    const [passedSeconds, setPassedSeconds] = useState(calculateTime(createdTime))
    const [timePassed, setTimePassed] = useState("")

    const createdDate = () => {
        let date = new Date(createdTime*1000)
        return date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes()
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeNow(Date.now()/1000|0)
            setPassedSeconds(calculateTime(createdTime))
        },5000)
        return () => clearTimeout(timer)
    },[timeNow])

    useEffect(() => {
        switch (true) {
            case passedSeconds > 0 && passedSeconds < 60:
                setTimePassed(`${passedSeconds} s ago`)
                break
            case passedSeconds >= 60 && passedSeconds <= 3600:
                setTimePassed(`${Math.floor(passedSeconds/60)}m ago`)
                break
            case passedSeconds > 3600 && passedSeconds <= 86400:
                setTimePassed(`${Math.floor(passedSeconds/3600)}h ago`)
                break
            case passedSeconds > 86400:
                setTimePassed(`${Math.floor(passedSeconds/86400)}d ago`)
                break
            default:
                setTimePassed("")
        }

    }, [passedSeconds])

    return <span title={createdDate()}>{timePassed}</span>
}