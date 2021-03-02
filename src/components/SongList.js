import React, {Component} from 'react'
import { connect } from "react-redux";
import {selectSong} from "../actions"
import SongDetail from '../components/SongDetails'


class SongList extends Component{
renderList(){
  return this.props.songs.map((song)=>{

    return(
      <div key={song.title}>

        
          <ul className="collection">
    <li className="collection-item avatar">
      
      <span className=" title">{song.title}</span>
      <p>{song.duration}</p>
      <button
       href="#!"
        className="btn secondary-content"
        onClick={()=>this.props.selectSong(song)}>Select</button>
    </li>
    </ul>

 
      </div>
    )
  })
}



  render(){
    // console.log(this.props);


    return( <div>
      <h1 className="center-align">SongList</h1>

      <div className="row">

      <div className="col s6">{this.renderList()}</div>


<div className=" col s6">
      <SongDetail/>

    </div>

      </div>
      
    </div>)


  }
}


const mapToStateProps= state =>{
  console.log(state);

  return {songs: state.songs}
}

export default connect(mapToStateProps,{selectSong:selectSong})(SongList);