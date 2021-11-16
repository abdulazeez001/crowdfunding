import React,{FC} from "react";

interface Prop{
    amountBacked:number,
    numOfBackers:number,
}

const Progress:FC<Prop> =(prop)=>{
    const {amountBacked,numOfBackers} = prop
    return(
        <section className="container">
            <div className="white-container progress-container">
            <div>
                <div>
                    <h2>${amountBacked}</h2>
                    <p>of $100,000 backed</p>
                </div>
                <div>
                    <h2>{numOfBackers}</h2>
                    <p>total backers</p>
                </div>
                <div>
                    <h2>56</h2>
                    <p>days left</p>
                </div>
            </div>
            <div>
                <progress  value={`${(amountBacked/100000)*100}`} max="100"></progress>
            </div>

            </div>
        </section>
    )

}


export default Progress