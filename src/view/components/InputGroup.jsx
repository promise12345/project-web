import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import "./style.css"

function InputGroup (props, ref) {
  const inputRef = useRef(null);
  const {id, type, length, getValue} = props;
  const [boxLength, setBoxLength] = useState([]);
  const [numList, setNumList] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [isfocus, setIsfocus] = useState(false);
  const [num, setNum] = useState('');

  useEffect(() => {
    switch(length) {
      case 4:
        setBoxLength([0,1,2,3]);
        break;
      case 6:
        setBoxLength([0,1,2,3,4,5]);
        break;
      default:
        setBoxLength([0,1,2,3,4,5]);
    }
  }, [length])

  const textChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g,'')
    setNum(value);
    setNumList(value.split(''));
    if(value.length == length){
      getValue(value);
    }
  }

  useImperativeHandle(ref, () => ({
    setDisabled,
    textChange,
  }));

  const renderBox = () => {
    return boxLength.map((item) => (
      <div key={Math.random()}>
        {numList[item]}
        <span className="shake" style={{display: item == numList.length && isfocus ? 'block' : 'none'}}>
          |
        </span>{' '}
      </div>
    ))
  }

  const inputFocus = () => {
    inputRef.current.readOnly = false;
    if(!disabled){
      inputRef.current.focus();
      setIsfocus(true);
    }
  }
  
  return (
    <div onClick={inputFocus} className="box-root-container" aria-hidden="true">
      <input
        id={id}
        ref={inputRef}
        maxLength={length}
        value={num}
        onChange={textChange}
        onBlur={() => setIsfocus(false)}
        className="box-input"
      />
      {
        (() => {
          if(type=='line'){
            return <div className="box-containers">{renderBox()}</div>
          }
          if(type=='box'){
            return <div className="box-container">{renderBox()}</div>
          }
          return '';
        })()
      }
    </div>
  )
}
InputGroup = forwardRef(InputGroup);
export default InputGroup;