import "./App.css";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

function App() {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [editPlayerName, setEditPlayerName] = useState("");
  const [oneEdit, setOneEdit] = useState(false);
  const [twoEdit, setTwoEdit] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(false);
  const [playerTwoTurn, setPlayerTwoTurn] = useState(false);

  //ini untuk notasi board game mode
  const [a1, seta1] = useState("");
  const [a2, seta2] = useState("");
  const [a3, seta3] = useState("");
  const [b1, setb1] = useState("");
  const [b2, setb2] = useState("");
  const [b3, setb3] = useState("");
  const [c1, setc1] = useState("");
  const [c2, setc2] = useState("");
  const [c3, setc3] = useState("");

  const [a1Checked, seta1Checked] = useState(false);
  const [a2Checked, seta2Checked] = useState(false);
  const [a3Checked, seta3Checked] = useState(false);
  const [b1Checked, setb1Checked] = useState(false);
  const [b2Checked, setb2Checked] = useState(false);
  const [b3Checked, setb3Checked] = useState(false);
  const [c1Checked, setc1Checked] = useState(false);
  const [c2Checked, setc2Checked] = useState(false);
  const [c3Checked, setc3Checked] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [a1, a2, a3, b1, b2, b3, c1, c2, c3]);
  //ini untuk modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleConfirmEditName = () => {
    if (oneEdit) {
      setPlayerOneName(editPlayerName);
    } else if (twoEdit) {
      setPlayerTwoName(editPlayerName);
    }
    setOneEdit(false);
    setTwoEdit(false);
    setEditPlayerName("");
    setShow(false);
  };

  const handleShow = (e) => {
    if (e === "one") {
      setOneEdit(true);
    } else if (e === "two") {
      setTwoEdit(true);
    }
    setShow(true);
  };

  const startedNewGame = () => {
    setIsGameStarted(true);
    setPlayerOneTurn(true);
  };

  const changePlayer = () => {
    if (playerOneTurn === true && playerTwoTurn === false) {
      setPlayerOneTurn(false);
      setPlayerTwoTurn(true);
    } else if (playerOneTurn === false && playerTwoTurn === true) {
      setPlayerOneTurn(true);
      setPlayerTwoTurn(false);
    }
    // checkWinner();
  };

  const checkWinner = () => {
    if (
      (a3 === a2 && a3 === a1 && a3 === "X") ||
      (a3 === b3 && a3 === c3 && a3 === "X") ||
      (a3 === b2 && a3 === c1 && a3 === "X") ||
      (b3 === b2 && b3 === b1 && b3 === "X") ||
      (c3 === b2 && c3 === a1 && c3 === "X") ||
      (c3 === c2 && c3 === c1 && c3 === "X") ||
      (a2 === b2 && a2 === c2 && a2 === "X") ||
      (a1 === b1 && a1 === c1 && a1 === "X")
    ) {
      setWinner(playerOneName);
    } else if (
      (a3 === a2 && a3 === a1 && a3 === "O") ||
      (a3 === b3 && a3 === c3 && a3 === "O") ||
      (a3 === b2 && a3 === c1 && a3 === "O") ||
      (b3 === b2 && b3 === b1 && b3 === "O") ||
      (c3 === b2 && c3 === a1 && c3 === "O") ||
      (c3 === c2 && c3 === c1 && c3 === "O") ||
      (a2 === b2 && a2 === c2 && a2 === "O") ||
      (a1 === b1 && a1 === c1 && a1 === "O")
    ) {
      setWinner(playerTwoName);
    } else {
      setWinner(null);
    }
  };

  const playerMove = (positionNotation) => {
    switch (positionNotation) {
      case "a1":
        seta1Checked(true);
        playerOneTurn ? seta1("X") : seta1("O");
        changePlayer();

        break;
      case "a2":
        seta2Checked(true);

        playerOneTurn ? seta2("X") : seta2("O");
        changePlayer();

        break;
      case "a3":
        seta3Checked(true);

        playerOneTurn ? seta3("X") : seta3("O");
        changePlayer();

        break;
      case "b1":
        setb1Checked(true);

        playerOneTurn ? setb1("X") : setb1("O");
        changePlayer();

        break;
      case "b2":
        setb2Checked(true);

        playerOneTurn ? setb2("X") : setb2("O");
        changePlayer();

        break;
      case "b3":
        setb3Checked(true);

        playerOneTurn ? setb3("X") : setb3("O");
        changePlayer();

        break;
      case "c1":
        setc1Checked(true);

        playerOneTurn ? setc1("X") : setc1("O");
        changePlayer();

        break;
      case "c2":
        setc2Checked(true);

        playerOneTurn ? setc2("X") : setc2("O");
        changePlayer();

        break;
      case "c3":
        setc3Checked(true);

        playerOneTurn ? setc3("X") : setc3("O");
        changePlayer();

        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choose your name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input autoFocus type="text" value={editPlayerName} onChange={(e) => setEditPlayerName(e.target.value)} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirmEditName}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <div className="header">
        <h1>Play Tic, Tac, Toe</h1>
        <p>Built with ReactJs by DomZ</p>
      </div>
      <div className="hero">
        <div className="playerName">
          <div className="playerCard">
            <p>Player1</p>
            <p>{playerOneName}</p>
            <h2>X</h2>
            <p
              className="tombolEdit"
              onClick={() => {
                handleShow("one");
              }}
            >
              Edit
            </p>
          </div>
          <div className="playerCard">
            <p>Player2</p>
            <p>{playerTwoName}</p>
            <h2>O</h2>
            <p
              className="tombolEdit"
              onClick={() => {
                handleShow("two");
              }}
            >
              Edit
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            startedNewGame();
          }}
          className="tombolStart"
        >
          Start New Game
        </button>

        {winner && (
          <div className="winOrLose">
            <h1>you won {winner}</h1>
          </div>
        )}

        {playerOneTurn && <div className="playerTurnIndicator">its your turn {playerOneName}</div>}
        {playerTwoTurn && <div className="playerTurnIndicator">its your turn {playerTwoName}</div>}

        <div className="playField">
          <div className={`boardGame ${isGameStarted ? "" : "hidden"}`}>
            <div

              className={`grid-item ${a3Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("a3");
              }}
            >
              <h1>{a3}</h1>
            </div>
            <div
              className={`grid-item ${b3Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("b3");
              }}
            >
              <h1>{b3}</h1>
            </div>
            <div
              className={`grid-item ${c3Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("c3");
              }}
            >
              <h1>{c3}</h1>
            </div>
            <div
              className={`grid-item ${a2Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("a2");
              }}
            >
              <h1>{a2}</h1>
            </div>
            <div
              className={`grid-item ${b2Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("b2");
              }}
            >
              <h1>{b2}</h1>
            </div>
            <div
              className={`grid-item ${c2Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("c2");
              }}
            >
              <h1>{c2}</h1>
            </div>
            <div
              className={`grid-item ${a1Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("a1");
              }}
            >
              <h1>{a1}</h1>
            </div>
            <div
              className={`grid-item ${b1Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("b1");
              }}
            >
              <h1>{b1}</h1>
            </div>
            <div
              className={`grid-item ${c1Checked ? "squareChecked" : ""}`}
              onClick={() => {
                playerMove("c1");
              }}
            >
              <h1>{c1}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
