/* import { Titulo } from "./Titulo"
import { Button } from "./Botao";
 */

import { CardList } from "./card-list";
import { ProfileCard } from "./perfil";

/* CONPONENTE APP */
function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center h-full min-h-screen">
        <ProfileCard name={"Carlinha"} avatarUrl={'https://randomuser.me/api/portraits/women/79.jpg'} role={"Gerente de marketing"} />
        <CardList/>
      </div>
    </>
  )
}

export default App