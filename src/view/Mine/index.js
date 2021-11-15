import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import InputGroup from '../components/InputGroup.jsx'
const Mine = () => {
  const InputGroupRef = useRef();
  const getValue = (value) => {
    console.log(value);
    InputGroupRef.current.setDisabled(false);
    // InputGroupRef.current.textChange({target: {value: ''}});

  }

  return <InputGroup id="InputGroup" ref={InputGroupRef} length={6} type="box" getValue={getValue} />
}
export default Mine;