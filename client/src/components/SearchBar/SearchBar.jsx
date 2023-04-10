import React, { useEffect, useState } from 'react'
import styles from "./SearchBar.module.css"
import { NavLink } from "react-router-dom"
import { getGamesName, getGames, Cambio, filter, FilterGenres,FilterRating,filter_status } from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'
import Detail from '../Detail/Detail'
import { CAMBIO } from '../../redux/types'
// import stylecss from "../css/landing.css"
function SearchBar() {
  const dispatch = useDispatch()

  const [charater, setCharacter] = useState("")
  const [option, setOption] = useState("")
  const {ban} = useSelector(state=>state);
  const [filterName, setFilterName] = useState("")
  const [filterRatin, setFilterRatin] = useState("")
  const [filterGener, setFilterGener] = useState("")

  const searchHandler = (event) => {
    const { value } = event.target;
    setCharacter(value);
  }

    //! BUSCAR POR NOMBRE TEXTBOX EJECUTADO POR BUTTON
  const buscarHandler = (event) => {
    // let Cambios = 1;
    // if (charater.length === 0) {
    //   dispatch(Cambio(Cambios))
    //   dispatch(getGames(ban))
    // } else {
      
      dispatch(Cambio(ban))
      dispatch(getGamesName(charater,ban))

    // }
  }

  //! BUSCAR POR NOMBRE ASENDENTE Y DESCENDENTE
  const FilterNameHandler = (e) => {
    const {value} = e.target;
    setFilterName(value)
    dispatch(filter(value))
  }

   //! BUSCAR POR GENERO
  const FilterGenreHandler = (e) => {
    const {value} = e.target;
    setFilterGener(value)
    // dispatch(Cambio(0))
    dispatch(filter_status(1))
    dispatch(FilterGenres(e.target.value))
    
  }


   //! BUSCAR POR RATING ASENDENTE Y DESCENDENTE
  const FilterRatingHandler = (e) => {
    const {value} = e.target;
    setFilterRatin(value)
    
    dispatch(FilterRating(e.target.value))
  }

   //! SETEAR LA OPCION SELECCIONADA DB Y API
  const FilterOptionHandler = (e) => {
    const {value} = e.target;
    setOption(value)
    
  let Cambios = 0;
    if (value === "Todos") {
      Cambios =1
      dispatch(Cambio(Cambios))
      dispatch(getGames(value))
    }else{
      if (value === "DB") {
        Cambios =2
        dispatch(Cambio(Cambios))
        dispatch(getGames(value))
      }else{
        if (value === "API") {
          Cambios =3
          dispatch(Cambio(Cambios))
          dispatch(getGames(value))
        }
      }
      // dispatch(Cambio(Cambios))
    }
    // var boton = document.getElementById("filterGener")
  //  (value === "usar"||value === "API")&&dispatch(getGames(option))
     
    dispatch(filter_status(0))
  if( filterGener !== "ordenar generos" && filterGener !== ""){
   
    dispatch(FilterGenres(value))
  }
    
    // e.preventDefault()
    // window.location.href = "http://localhost:3000/Home?nombre=" + e.target.value;
    var filterName = document.getElementById("filterName")
      filterName.value = "ordenar name"
      var filterRating = document.getElementById("filterRating")
      filterRating.value = "ordenar rating"
      var filterGeners = document.getElementById("filterGener")
      filterGeners.value = "ordenar generos"
  }

 
 //! CARGA LA PAGINA INICIAL 
  useEffect(() => {
   
    if (charater.length === 0) {
      // dispatch(Cambio(Cambios))
      
      // var option = document.getElementById("option")
      // option.value = "Todos"
      
      
      // console.log(first)
      console.log("el charatersssssssssssssssssss",charater)
      dispatch(getGames(ban))
      setFilterGener("");
      setFilterName("null")
      setFilterRatin("null")
      setOption("usar")
    } else {
      // Cambios = true
      // dispatch(Cambio(Cambios))
      console.log("el charater",charater)
      dispatch(getGamesName(charater,ban))

    }
  }, [charater])

  return (
    <div className={styles.container}>
     
        <h1>VIDEO GAMES</h1>

        <div className={styles.links}>
          <NavLink to="/">
            <button>Game Over</button>
          </NavLink>
          <NavLink to="/newGame">
            <button>New Game</button>
          </NavLink>
        </div>
        <input type='search' onChange={searchHandler} placeholder='Busca tu Juego Favorito' />
        <br />
        <button onClick={buscarHandler}>Buscar</button>
        <div className={styles.selects}>
        {/* <label >usar: </label> */}
        <select name="seleccion" id="option" onChange={FilterOptionHandler}>
        <option value="Todos" >Todos</option>
          <option value="API" >API</option>
          <option value="DB">Data Base</option>
        </select>

        {/* <label >filtrar name: </label> */}
        <select name="seleccion" id="filterName" onChange={FilterNameHandler}>
        <option value="ordenar name" >Ordenar Nombre</option>
          <option value="ascendente" >ascendente</option>
          <option value="descendente">descendente</option>
        </select>

        {/* <label >filtrar Rating: </label> */}
        <select name="seleccionRating" id="filterRating" onChange={FilterRatingHandler}>
        <option value="ordenar rating" >Ordenar Rating</option>
          <option value="ascendente" >ascendente</option>
          <option value="descendente">descendente</option>
        </select>

        <select name="filterGener" id="filterGener"  onChange={FilterGenreHandler}>
        <option value="ordenar generos" >Ordenar generos</option>
          <option value="Racing">Racing</option>
          <option value="Shooter">Shooter</option>
          <option value="Adventure">Adventure</option>
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Fighting">Fighting</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Strategy">Strategy</option>
          <option value="Arcade">Arcade</option>
          <option value="Simulation">Simulation</option>
          <option value="Sports">Sports</option>
          <option value="Card">Card</option>
          <option value="Family">Family</option>
          <option value="Board Games">Board Games"</option>
          <option value="Educational">Educational</option>
          <option value="Casual">Casual</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Indie">Indie</option>
          <option value="Platformer">Platformer</option>
        </select>
        </div>
        
        
        
      </div>
   
  )
}

export default SearchBar


{/* <select name="gener" id="" onChange={FilterGenreHandler}>

<option value="Racing">Racing</option>
<option value="Shooter">Shooter</option>
<option value="3">Adventure</option>
<option value="4">Action</option>
<option value="5">RPG</option>
<option value="6">Fighting</option>
<option value="7">Puzzle</option>
<option value="10">Strategy</option>
<option value="11">Arcade</option>
<option value="14">Simulation</option>
<option value="15">Sports</option>
<option value="17">Card</option>
<option value="19">Family</option>
<option value="28">Board Games"</option>
<option value="34">Educational</option>
<option value="40">Casual</option>
<option value="59">Massively Multiplayer</option>
<option value="51">Indie</option>
<option value="83">Platformer</option>
</select> */}