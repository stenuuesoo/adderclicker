import './App.css';
import React, { useState } from 'react';
import Button  from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <Button variant="contained" color="error" onClick={() => setCount(count === 0)}>Reset Count</Button>
      <br />
        <Card className="Card-style" sx={{ maxWidth: 800 }}>
            <CardContent >
              <Typography variant="body1" color="text.secondary">
              <p>You clicked {count} times</p>
              </Typography>
            </CardContent>
          </Card>
          <br />
          <Button variant="contained" color="success" onClick={() => setCount(count + 1)}>Click me</Button>
          
      </header>
    </div>
  );
}

export default App;
