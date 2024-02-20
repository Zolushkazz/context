import { useContext } from "react";
import { NameContext } from "./MainProvider";

export const TwentyFive = (props) => {
  const { na } = props;
  const { name, setName} =useContext(NameContext)
  return <div>{na}</div>;
};
