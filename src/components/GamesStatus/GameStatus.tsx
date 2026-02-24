import { resetGame } from "../../helpers/gameActions";
import styles from "./GamesStatus.module.scss";

const GameStatus = ({ status, dispatch }: { status: string; dispatch: any }) => {
  const handleRestart = () => {
    dispatch(resetGame());
  };

  return (
    <div className={styles.status}>
      <h1>YOU {status.toUpperCase()}!</h1>
      <button onClick={handleRestart}>restart</button>
    </div>
  );
};

export default GameStatus;
