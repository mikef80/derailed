import { useReducer } from "react";
import styles from "./GamesStatus.module.scss";
import { gameReducer, initialState } from "../../helpers/gameReducer";

const GameStatus = () => {
  const [state] = useReducer(gameReducer, initialState);

  return (
    <div className={styles.status}>
      <h1>YOU {state.gameStatus.toUpperCase()}!</h1>
    </div>
  );
};

export default GameStatus;
