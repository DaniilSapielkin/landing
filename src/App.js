import React, { useState } from "react";
import Modal from "@mui/material/Modal";

import { Main } from "./sections/Main/Main";
import { Accept } from "./sections/Accept/Accept";
import { StandsOut } from "./sections/StandsOut/StandsOut";
import { BlockChain } from "./sections/BlockChain/BlockChain";
import { BlockChainInteg } from "./sections/BlockChainInteg/BlockChainInteg";
import { Challenges } from "./sections/Challenges/Challenges";
import { MegahubSystem } from "./sections/MegahubSystem/MegahubSystem";
import { FormStart } from "./sections/FormStart/FormStart";
import { Bottom } from "./sections/Bottom/Bottom";
import FormField from "./components/Modal";

import "./App.css";

export const Context = React.createContext();

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isOpenMenuBurger, setIsOpenMenuBurger] = useState(false);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleIsBurgerMenu = () => {
    setIsOpenMenuBurger(isOpenMenuBurger);
  };

  return (
    <Context.Provider value={{ handleOpenModal }}>
      <div className="App">
        <div className="wrapper">
          <Main />
          <Accept />
          <StandsOut />
          <BlockChain />
          <BlockChainInteg />
          <Challenges />
          <MegahubSystem />
          <FormStart />
          <Bottom />

          <Modal
            open={isModal}
            onClose={() => setIsModal(false)}
            closeAfterTransition
            BackdropProps={{
              timeout: 500,
            }}
          >
            <FormField onClose={() => setIsModal(false)} />
          </Modal>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
