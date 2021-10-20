import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { sampleSize, chunk } from 'lodash';

import phrases from '../phrases';

type SquareProps = {
  children: JSX.Element | JSX.Element[] | string
}
const Square = (props: SquareProps) => {
  const { children } = props
  const [marked, setMarked] = useState(false);

  return <Button
    variant={marked ? 'contained' : 'outlined'}
    size="large"
    style={{ height: '10rem' }}
    color={marked ? 'primary' : 'default'}
    fullWidth
    onClick={() => setMarked(!marked)}
  >
    {children}
  </Button>;
}

const Home = () => {
  const randomPhrases = chunk(sampleSize(phrases, 25), 5);

  return <Container maxWidth="md">
    <Paper style={{ padding: '2rem' }}>
      <Typography variant="h1" align="center" gutterBottom>Consulting Bingo</Typography>

      <table style={{ width: '100%', tableLayout: 'fixed' }}>
        <tbody>
          {randomPhrases.map((row, rowNumber) => <tr key={rowNumber}>
            {row.map((phrase, columnNumber) => <td key={columnNumber}>
              <Square>{phrase}</Square>
            </td>)}
          </tr>)}
        </tbody>
      </table>
    </Paper>
  </Container>;
}

export default Home;