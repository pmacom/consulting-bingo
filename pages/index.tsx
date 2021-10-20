import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { sampleSize, chunk } from 'lodash';

import phrases from '../phrases';
import { isWinner } from '../winlist';

type SquareProps = {
  children: JSX.Element | JSX.Element[] | string,
  uuid: string,
  onClick: (uuid: string) => void,
  checked: boolean,
}
const Square = (props: SquareProps) => {
  const { children, uuid, onClick, checked } = props

  return (
    <Button
      variant={checked ? 'contained' : 'outlined'}
      size="large"
      style={{ height: '10rem' }}
      color={checked ? 'primary' : 'default'}
      fullWidth
      onClick={() => onClick(uuid)}
    >
      {children}
    </Button>
  );
}

const randomPhrases = chunk(sampleSize(phrases, 25), 5);

const Home = () => {
  const [checked, setChecked] = useState<Array<string>>([])
  const [winner, setWinner] = useState<boolean>(false)

  const toggleChecked = (uuid: string) => {
    let updatedCheckedArray = checked.includes(uuid)
      ? checked.filter(id => id !== uuid)
      : [...checked, uuid]

    let winner = isWinner(updatedCheckedArray)

    setChecked(updatedCheckedArray)
    setWinner(winner)

    console.log(winner ? 'WINNER!' : "YOU ARE A LOSER.")
  }

  return <Container maxWidth="md">
    <Paper style={{ padding: '2rem', background: winner ? 'lime' : 'white' }}>
      <Typography variant="h1" align="center" gutterBottom>Consulting Bingo</Typography>

      <table style={{ width: '100%', tableLayout: 'fixed' }}>
        <tbody>
          {randomPhrases.map((row, rowNumber) => (
            <tr key={rowNumber}>
              {row.map((phrase, colNumber) => (
                <td key={colNumber}>
                  <Square
                    uuid={`${rowNumber}-${colNumber}`}
                    onClick={toggleChecked}
                    checked={checked.includes(`${rowNumber}-${colNumber}`)}
                  >
                    {phrase}
                  </Square>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  </Container>;
}

export default Home;