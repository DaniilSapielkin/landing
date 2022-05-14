import { ReactComponent as IconCommunication } from "../../assets/images/lackComunication.svg";
import { ReactComponent as IconWorkflow } from "../../assets/images/unstableWorkflow.svg";
import { ReactComponent as IconDescrased } from "../../assets/images/descrased.svg";
import { ReactComponent as IconTransperant } from "../../assets/images/transperant.svg";

export const MainInfoTabs = [
  {
    id: 1,
    header: "Lack of Communication.",
    description:
      "MeGaHub implementation can become the top management solution in every organization. Its implementation provides an enhanced communication level in the work environment due to the fact that CRM is a system allowing to track all the company’s internal processes. As a result, employees are aware of the company’s internal workflow and are accessed to all the client data gathered in one place.  ",
    icon: <IconCommunication />,
  },
  {
    id: 2,
    header: "Unstable workflows.",
    description:
      "Using MeGaHub allows companies to extend a management level in terms of the workflow, tasks, assignments, and their progress tracking. Having all the responsibilities and roles assembled in one system enables businesses to properly allocate human resources by efficiently dividing and operating the employees.",
    icon: <IconWorkflow />,
  },
  {
    id: 3,
    header: "Decreased remote work productivity.",
    description:
      "MeGaHub is an excellent tool for organizations with staff working remotely. Our software essentially provides a central place where businesses can store customer and prospect data, track interactions with clients, and share this information with colleagues. It allows businesses to manage relationships with customers, helping the business to expand and grow.",
    icon: <IconDescrased />,
  },
  {
    id: 4,
    header: "Lack of transparent reporting in any department.",
    description:
      "As a consequence, the difficulty in making management and decisions and the fear that with the growth of the business, problems in it will increase proportionately. As it was mentioned above, all the company’s reporting is assembled, structured, and stored in one place, which is highly convenient for businesses regardless of the domain.",
    icon: <IconTransperant />,
  },
];
