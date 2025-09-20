/* import { Titulo } from "./Titulo"
import { Button } from "./Botao";
 */

import { ProfileCard } from "./perfil";

/* CONPONENTE APP */
function App() {

  return (
    <>
      <div className="flex justify-center items-center text-center h-full min-h-screen">
        <ProfileCard name={"Carlinha"} avatarUrl={'https://randomuser.me/api/portraits/women/79.jpg'} role={"Gerente de marketing"} />
      </div>
    </>
  )
}

export default App