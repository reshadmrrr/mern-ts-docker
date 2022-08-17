import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function MyAlert({message}:{message: string}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="container">
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {message}
        </Alert>
      </div>
    );
  }
  return (
    <div></div>
  )
}

export default MyAlert;