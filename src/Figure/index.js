import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navigation from "../Navigation"
// import './style.css'

const Figure = () => {

   const {figureType, figureColor} = useParams();


    return(
        <div className={figureType} style={{backgroundColor:figureColor} }>{figureType}</div>
    )
}

export default Figure;