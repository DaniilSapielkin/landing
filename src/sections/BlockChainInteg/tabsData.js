import { ReactComponent as IconHuman } from "../../assets/icons/humanResorce.svg";
import { ReactComponent as IconManager } from "../../assets/icons/projectManager.svg";
import { ReactComponent as IconModule } from "../../assets/icons/accountModule.svg";
import { ReactComponent as IconBlockChain } from "../../assets/icons/blockchainDecentr.svg";
import { ReactComponent as IconWareHouse } from "../../assets/icons/wareHouseIcon.svg";

export const tabs = [
  {
    title: "Human Resources module",
    icon: <IconHuman />,
    id: 1,
  },
  {
    title: "Project Management module",
    icon: <IconManager />,
    id: 2,
  },
  {
    title: "Accounting module",
    icon: <IconModule />,
    id: 3,
  },
  {
    title: "Warehouse module",
    icon: <IconWareHouse />,
    id: 4,
  },
  {
    title: "Blockchain decentralized core for each CRM module",
    icon: <IconBlockChain />,
    id: 5,
  },
];
