import React,{FC} from "react";


interface Prop{
    content:string,
    color?:string,
    classname:string
}

const Button:FC<Prop> =(prop)=>{
    const {classname,content,color} = prop
    return(
        <div>
            <button className={classname}>
                {content}
            </button>

        </div>
    )

}


export default Button