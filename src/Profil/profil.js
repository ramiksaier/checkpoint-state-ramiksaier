import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

export default class profil extends Component {
  constructor(props){
console.log("constructor()") ;
  super(props)

  this.state = {
intervall:null,
timer:0,
  }
}
componentDidMount  () {
  console.log("componentDidMount () ");
 this.setState({
intervall :setInterval ( () => {

this.setState({timer:this.state.timer+1 });
},1000),
});
 }

componentDidUpdate () {
  console.log("componentDidUpdate()")
  
}



  
         
  
  state={
    isVisible:false
  }
  toggleVisibility=()=>{

    this.setState({
    isVisible:!this.state.isVisible
  })}
  render() {
    console.log("render()")

    return (
      <div className="class">
              <Card style={{ width: '18rem' }} >
                <Button variant="primary" onClick={this.toggleVisibility}>Click me</Button>
                   {this.state.isVisible ? 
             <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/c/c5/ClubAfricainlogo.gif" alt="club africain" />
                   <Card.Body>
                     <Card.Title className="club">Club </Card.Title>  <Card.Title className="africain">African </Card.Title>
                     <Card.Text>
                     Le Club africain (arabe : النادي الإفريقي ;
                          abrégé en CA) est un club de football tunisien basé à Tunis. Le club est l'une des sections fondatrices du club omnisports homonyme, le Club africain, fondé en 1920 dans le quartier de Bab Jedid. Connu sous le surnom d'Al Ifriki, l'équipe de football première évolue en championnat de Tunisie.
                 
                     </Card.Text>
                     <Card.Text className="club">
                     Since 4 octobre 1920
                     </Card.Text>
                     <Card.Text> {this.state.timer}</Card.Text>
                   </Card.Body> 
                 </Card>    : null
                  }
  </Card>
  
      </div>
    )
  }
}
