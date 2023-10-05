import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    /*
      Propriedades StatusBar
      barStyle -> altera a cor dos ícones;
      backgroundColor -> altera a cor da bara;
      translucent -> indica de a status bar pode sobrepor 
      (ficar em cima/ a frente) a tela de app.
    */
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}