function WordForm(props) {
  // render
  const renderInputs = () => {
    let wordList = []
    for(let word of props.words) {
      wordList.push(<input key={word.key} placeholder={word.label}></input>)
    }
    return wordList // implement changes
  }
  
  return (
    <div id="div-words">
      { renderInputs() }
    </div>
  )
}

export default WordForm

// TODO: 
// in the wordList.push(), add an onChange function for each input field
// create a function that adds each change to the input field, to the story