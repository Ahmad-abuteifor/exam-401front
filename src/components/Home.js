import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      frutedata: [],
    })
  }



  render() {
    let  url = `https://fruit-api-301.herokuapp.com/getFruit`

    const allFrute = ((req, res) => {
      res.josn(url)
      this.setState({
        frutedata:url.fruits
      })
    }) 
    allFrute()
    return (
      this.state.frutedata.map(data => {

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.price}
            </Card.Text>
            <Button variant="primary">ADD TO FAV</Button>
          </Card.Body>
        </Card>
      })

    )
  }
}

export default Home;
