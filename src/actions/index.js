//Action Creator
export const selectSong = song =>{
  // Report an action

  return{
    type: 'SONG_SELECTED',
    payload: song
  }
}