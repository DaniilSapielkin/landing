import { ReactComponent as IconDecentalize } from "../../assets/icons/decentralizedIcon.svg";
import { ReactComponent as IconWallet } from "../../assets/icons/cryptoWallet.svg";
import { ReactComponent as IconTransaction } from "../../assets/icons/transactionIcon.svg";
import { ReactComponent as IconProfile } from "../../assets/icons/personProfile.svg";

export const blocksInfo = [
  {
    icon: <IconDecentalize />,
    title: "Decentralized and private  data storage",
    description:
      "Every module’s data is safely stored in the integrated blockchain system. It transparently shows all required data on the timeline and allows keeping a track of business processes and stats. The functional speed Blockchain advantage allows to improve overall time spendings for inner-processes in a significant way.",
    link: "#",
    linkTitle: `Read more ->`,
  },
  {
    icon: <IconWallet />,
    title: "Crypto wallet integration",
    description:
      "Cryptocurrency wallets (such as Metamask, Trust wallet) are integrated to MeGaHub.",
    link: null,
    linkTitle: `Read more ->`,
  },
  {
    icon: <IconTransaction />,
    title: "Funds transfer",
    description:
      "Between CRM users' wallets, including payrolls. MeGaHub enables essential, real-time, and secure money transfers. ",
    link: "#",
    linkTitle: `Read more ->`,
  },
  {
    icon: <IconProfile />,
    title: "Personal profiles, proven work experience",
    description:
      "Employees' profiles are stored into the blockchain, which ensures the safety and accuracy of the information, opens up such functions as hiding personal information when required (strong feature for outsourcing/outstaffing IT companies)",
    link: "#",
    linkTitle: `Read more ->`,
  },
];
