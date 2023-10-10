import Images from "./Components/Images"
import Textbackground from "./Components/TextBackground"
import TextColor from "./Components/TextColor"
import TextPerson from "./Components/TextPerson"
import TextSize from "./Components/TextSize"

function App() {
  

  return (
    <>
      <div className='container'>
        <TextSize />
        
        <TextPerson />

        <TextColor />

        <Textbackground />

        <Images />
      </div>
    </>
  )
}

export default App
