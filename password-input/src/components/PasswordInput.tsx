import React, { useState, useEffect, useCallback } from 'react';

type PasswordInputProps = {
  password: string;
  onSuccess: () => void;
};

const PasswordInput = ({ password, onSuccess }: PasswordInputProps) => {
  const [blockedInputs, setBlockedInputs] = useState([] as Array<number>);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const drawingRandomInputs: any = useCallback(() => {
    const passwordLength: number = password.length;
    let randomInputs: Array<number> = [];
    const minPasswordLength: number = 1;
    const maxPasswordLength: number = passwordLength;
    const maxbBlockedInputs: number = getRandomNumber(2, passwordLength / 2); // because we want to get max numbers of index
    console.log(maxbBlockedInputs);
    while (randomInputs.length < maxbBlockedInputs) {
      let randomIndex = getRandomNumber(minPasswordLength, maxPasswordLength); // because we want to get numbers from 1 - 13(if word 'HelloWorld666'.length = 13)
      if (!randomInputs.includes(randomIndex)) {
        randomInputs.push(randomIndex);
      }
    }
    if (randomInputs.length === maxbBlockedInputs) {
      return randomInputs.sort((a, b) => a - b);
    }
  }, [password.length]);

  useEffect(() => {
    const drawingData: any = drawingRandomInputs();
    setBlockedInputs(drawingData);
  }, [drawingRandomInputs]);

  return (
    <div>
      <h2>Blocked inputs index</h2>
      <ol>{blockedInputs && blockedInputs.map((input, index) => <li key={index}>{input}</li>)}</ol>
    </div>
  );
};

export default PasswordInput;
