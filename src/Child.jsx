// const Child= ({name, age}) => {
//     return(
//         <>
//             my name is {name} and my age is {age}
//         </>
//     )
// }

// export default Child;

import { useContext } from "react";
import { AppContext } from "./Context";
const Child= () => {

    const data= useContext(AppContext)
    const {name, age}= data

    return(
        <>
            my name is {name} and my age is {age}
        </>
    )
}

export default Child;