import { useMemo, useState } from "react";

export default function Factorial() {
  let [num, setNum] = useState(1);
  let [inc, setInc] = useState(0);

  let onChange = (e) => {
    setNum(e.target.value);
  };

  let onInc = () => {
    setInc(inc + 1);
  };
  
//   that's how usememo works
  const fxn = useMemo(() => factorial(num),[num]);

//   const fxn = factorial(num);

  return (
    <div>
      Factorial of
      <input value={num} onChange={onChange} type="number" />
      <br />
      is {fxn}
      <br />
      <button onClick={onInc}>Use Memo</button>
    </div>
  );
}
function factorial(a) {
  console.log("Factorial fxn called");
  return a <= 0 ? 1 : a * factorial(a - 1);
}
