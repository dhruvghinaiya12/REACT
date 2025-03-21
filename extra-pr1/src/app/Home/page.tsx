"use client"
import React, { FC } from "react";
import Button from "../components/Button";

const Page: FC = () => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  const handleClick = () => {
    console.log(sum(5, 10));
  };


  return (
    <div>
      <Button onclick={handleClick} />
    </div>
  );
};

export default Page;
