import React from 'react'
import { connect } from "react-redux";

const SongDetail = ({song}) => {

if(!song){
  return(
    <div className="center-align  valign-wrapper">Select a song</div>
  )
}


  return(<div style={{height:'400px',width:'50vw'}} className="  valign-wrapper">
    <div style={{width:'100%'}} className="center-align" >
      <h2>Details For:</h2>
    <h4>{song.title}</h4>
    <h4>{song.duration}</h4>
      </div>
      </div>) 
}

const mapStateToProps= state =>{

return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)