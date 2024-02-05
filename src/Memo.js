import { useMemo, useState } from "react";

const Memo = () => {
  const [neew, setNew] = useState(0);
  const [value, setValue] = useState(10);
  const memo = useMemo(
    function multicount() {
      console.log("function is running");
      return value * 2;
    },
    [value]
  );
  return (
    <div>
      <h1> {neew}</h1>
      <button onClick={() => setNew(neew + 1)}>update</button>
      <h1> {value}</h1>
      <h1>{memo}</h1>
      <button onClick={() => setValue(value * 20)}>increase</button>
    </div>
  );
};

export default Memo;
