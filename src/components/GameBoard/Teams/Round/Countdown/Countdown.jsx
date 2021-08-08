import React, {useEffect, useState} from 'react'


const Countdown = ({startTime}) => {
    let [time, setTime] = useState("")
    let [mounted, setMounted] = useState(true)

    const startTimer = () => {
        let duration = 10
        let endTime = startTime + duration
        let now = Date.now()/1000|0
        let time = endTime - now
        setTimeout(() => {
            if (endTime > now) {
                let minutes = Math.floor((time / 60) % 60);
                let seconds = Math.floor(time % 60);
                setTime(minutes + ":" + (seconds < 10 ? 0 : "") + seconds)
                if(mounted) {
                    return startTimer()
                }

            } else {
                setTime("finished")
            }
        }, 1000)
    }
    useEffect(() => {
        startTimer()
        return () => {setMounted(false)}
    },[])
    return <div>{time}</div>
}

export default Countdown