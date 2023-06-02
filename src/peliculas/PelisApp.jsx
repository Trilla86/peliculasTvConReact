import { AppRouter } from "../router/AppRouter"
import { FiltroProvider } from "./context"


export const PelisApp = () => {

  
  

  return (
    <FiltroProvider>
        <AppRouter />
    </FiltroProvider>
    
  )
}
