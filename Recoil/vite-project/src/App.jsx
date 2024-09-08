import './App.css'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { defaultColourState, selectedColourState } from './atoms'
import { COLOURS } from './colours';

function App() {
  const backgroundColor = useRecoilValue(defaultColourState);
  return (
    <>
      <div style={{ backgroundColor, height: '100vh', transition: 'background-color 0.5s' }}></div>
      {COLOURS.map(colour => (
        <ColourButton key={colour.id} id={colour.id} name={colour.name} />
      ))}
    </>
  )
}

function ColourButton({ id, name }) {
  const setColour = useSetRecoilState(selectedColourState);
  return (
    <button onClick={() => setColour(COLOURS.find(colour => colour.id === id))}>
      {name}
    </button>
  )
}

export default App
