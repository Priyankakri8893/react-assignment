import Portfolio from "./Portfolio";
import Section from "./Section";
import Home from "./Home";
import About from "./About";
import "./style.css"

const Combine= () => {
    return(
        <>
            <Portfolio color= {{backgroundColor: "red", minHeight: "12vh"}}  func= {<Section/>}/>
            <Portfolio color= {{backgroundColor: "yellow", minHeight: "120vh"}} func= {<Home/>}/>
            <Portfolio color= {{backgroundColor: "green", minHeight: "110vh"}} func={<About/>} />
            <Portfolio color= {{backgroundColor: "orange", minHeight: "100vh"}} />
        </>
    )
}

export default Combine;