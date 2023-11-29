import { useContext } from "react";
import Context from "./Context";

const Third = () => {
  const ContextData = useContext(Context);
  return (
    <div>
      <h1>Third Component</h1>
      {ContextData}
      <hr />
    </div>
  );
};

export default Third;
