import { useEffect, useState } from 'react';

type Players = 'X' | 'O' | null;

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  highlight: boolean;
}

function Square({ value, onSquareClick, highlight }: SquareProps) {
  const highlightWinnerStyle = 'bg-green-400';

  return (
    <button
      className={`w-10 h-10 ${highlight && highlightWinnerStyle}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

interface BoardProps {
  xIsNext: boolean;
  squares: Array<Players>;
  onPlay: (nextSquares: Array<Players>) => void;
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const [highlightWinnerSequence, setHighlightWinnerSequence] =
    useState<boolean>(false);
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? 'X' : 'O';

    onPlay(nextSquares);
  }

  interface winnerReturn {
    winner: Players;
    sequence: Array<number>;
  }

  function calculateWinner(squares: Array<Players>): winnerReturn | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          winner: squares[a],
          sequence: [a, b, c],
        };
      }
    }
    return null;
  }

  const result = calculateWinner(squares);

  let status;
  if (result) {
    status = `Winner is ${result.winner}`;
  } else {
    const haveAnotherMove = squares.some((square) => square === null);

    status = haveAnotherMove ? `Next player is ${xIsNext ? 'X' : 'O'}` : 'Draw';
  }

  useEffect(() => {
    if (result) {
      const intervalId = setTimeout(() => {
        setHighlightWinnerSequence((prevState) => {
          const currentState = !prevState;
          setHighlightWinnerSequence(currentState);

          return currentState;
        });
      }, 200);

      return () => clearInterval(intervalId);
    }
  }, [result]);

  const squareList = squares.map((square, index) => {
    return (
      <Square
        key={index}
        value={square}
        onSquareClick={() => handleClick(index)}
        highlight={
          result?.sequence.includes(index) ? highlightWinnerSequence : false
        }
      />
    );
  });

  return (
    <>
      <div>{status}</div>
      <div className="flex justify-start items-start">
        <div className="grid grid-cols-3 divide-x-2 divide-y-2 divide-indigo-500 text-center ">
          {squareList}
        </div>
      </div>
    </>
  );
}

export default function Game() {
  type BoardState = 'X' | 'O' | null;
  const [history, setHistory] = useState<Array<BoardState[]>>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<Players>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move: number) {
    setCurrentMove(move);
  }

  const moves = history.map((_squares, move) => {
    let description = 'Go to ';
    description += move > 0 ? `move #${move}` : 'game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol className="list-decimal">{moves}</ol>
      </div>
    </div>
  );
}
