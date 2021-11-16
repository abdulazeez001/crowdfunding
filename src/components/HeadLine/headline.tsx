import React,{FC} from "react";
import { IconBookmark, LogoMastercraft } from "../../assets";
import Button from "../Button";

const HeadLine:FC =()=>{
    return (
        <section className="container">
            <div className="white-container headline">
                <div className="mastercraft">
                    <img src={LogoMastercraft} alt=""/>
                </div>
                <div className="content">
                    <h1>Mastercraft Bamboo Monitor Riser</h1>
                    <p>A beautifully & handcrafted monitor stand to reduce neck and eye strain.</p>
                </div>
                <div className="control">
                    <Button classname='lg'content='Back this project'/>
                    <div>
                        <img src={IconBookmark} alt="" />
                        <p>Bookmark</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadLine;