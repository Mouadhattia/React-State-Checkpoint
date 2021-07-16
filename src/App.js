import React from "react"
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    Person : { fullName:"Mouadh Attia", bio:"29 years student in GoMyCode", imgSrc:"mouadh1.jpg", profession:"Web Developer "},
    show : true,
    count: 0
  };
}
  render(){
    const count = this.state.count
    return (
    <div className="App">
      {
        this.state.show?
      <div>
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <div><img src={this.state.Person.imgSrc} alt={"me"}style={{width:500}}></img></div>
        <h1>{this.state.Person.profession}</h1>
        <h2>Current Count : {count}</h2>
      </div>
      :null
      }
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>Hide/Show</button>
    </div>)
  }

  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

}


export default App;