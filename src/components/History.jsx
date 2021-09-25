import React from "react";
function History(props) {


    return (
        <div>
            <h1>History</h1>
            <ul>
                {props.addNewHistory.map((item, index) => {
                    return (
                        <div key={index} >
                           this the url: {item.info.url}  <br></br><br></br>
                           this the method used: {item.info.method} <br></br><br></br>
                           
                           
                           </div>

                    )
                })}
            </ul>
        </div>
    )

}
export default History