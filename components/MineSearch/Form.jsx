import React, { useState, useCallback, useContext } from "react";
import { TableContext, START_GAME } from "./";

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mines, setMines] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);
  const onChangeMines = useCallback((e) => {
    setMines(e.target.value);
  }, []);
  const onClickBtn = useCallback(() => {
    dispatch({ type: START_GAME, row, cell, mines });
  }, [row, cell, mines]);

  return (
    <div>
      <input
        type="number"
        placeholder="Row"
        value={row}
        onChange={onChangeRow}
      />
      <input
        type="number"
        placeholder="Cell"
        value={cell}
        onChange={onChangeCell}
      />
      <input
        type="number"
        placeholder="Mines"
        value={mines}
        onChange={onChangeMines}
      />
      <button onClick={onClickBtn}>Start</button>
    </div>
  );
};

export default Form;
