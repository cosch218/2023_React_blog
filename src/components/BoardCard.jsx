import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function BoardCard({board}) {
  return (
    <div>
      <Card style={{ width: '18rem' , margin: '20px auto'}}>
        <Card.Body>
          <Link to={`/boardlist/${board.id}`} style={{textDecoration: 'none', color: 'black'}}>{board.title}</Link>
          <Card.Text>{board.date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
