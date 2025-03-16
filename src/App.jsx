//import './App.css'
import AppStyle from './AppStyle'
import { useState } from "react";
import HomePage from './pages/HomePage'
import CategoryContent from './components/CategoryContent/CategoryContent'
import OverlayDark from './components/OverlayContent/OverlayDark'

function App() {
  const [IsOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleOverlay = ()=>{
      setIsOverlayVisible(!IsOverlayVisible);
    }

    
  
  const restoreBackgroud = ()=>{
    if(IsOverlayVisible == true) {
      setIsOverlayVisible(false);
    }
  }
  return (
    <AppStyle onClick={()=>{restoreBackgroud()}}>
      <HomePage handleOverlay={handleOverlay} />
      {IsOverlayVisible && <OverlayDark/>}
      {IsOverlayVisible && <CategoryContent isVisible={IsOverlayVisible} onClick={(e) => e.stopPropagation()}/>}
      
    </AppStyle>
  )
}

export default App
