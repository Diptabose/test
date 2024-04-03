import Image from "next/image";

import { ONE, TWO, THREE , FOUR} from "./constants";

export default function Home() {
  return (
    <>
      <div>{ONE}</div>
      <div>{TWO}</div>
      <div>{THREE}</div>
      <div>{FOUR}</div>
    </>
  );
}
