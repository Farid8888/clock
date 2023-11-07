import React,{useEffect,useState} from "react";
import './styles.css'


interface D{
    time:Date
}

const Clock=()=> {
const [state,setState] = useState<D>({
    time:new Date()
})

const region = Intl.DateTimeFormat().resolvedOptions().timeZone
console.log(state)
  useEffect(()=>{
    const timerId =setInterval(()=>{
        fetch(`http://worldtimeapi.org/api/timezone/${region}`)
    .then(response=>response.json())
     .then(responseData=>{
        setState({
            time:new Date(responseData.datetime)
        })
     })
    },1000)
    return ()=>clearInterval(timerId)
  },[region])

const hh = state.time.getHours() * 30
console.log(hh)
const mm = state.time.getMinutes() * 6
console.log(mm)
const ss = state.time.getSeconds() * 6
console.log(ss)
    return (
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${(hh) +(mm/12) }deg)`
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${mm}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${ss}deg)`
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
    );
  }


export default Clock