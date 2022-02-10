import React, { useState } from 'react';
import Select from 'react-select';
import './BgColor.css'

const BgColor = () => {

    let [bgColor, setBgColor] = useState('grey')

    let bgHandler = (e) =>{
        console.log(e);
        setBgColor(e.label)
    }

    let colors = [
        {value:1, label:'blue'},
        {value:2, label:"red"},
        {value:3, label:"black"},
        {value:4, label:"green"},
        {value:5, label:"yellow"},
    ]

    return (
        <div>
            <style>{'body {background-color:' + bgColor + ' ; }'}</style>
            <Select options={colors} onChange={bgHandler}/>
        </div>
    );
};

export default BgColor;