import React from "react";
import "./App.css";
import Todoitems from "./TodoItems/items";
import Additems from './AddItems/additems'
class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Med", age: 22 },
      { id: 2, name: "Sami", age: 23 },
      { id: 3, name: "karim", age: 24 }
    ]
  };
  /*
  showfunction=()=>{
    console.log(this.state.items.length)
  }
  */
 addItem = (item) =>{
   console.log("===>",item)
   item.id=Math.random()
let items =this.state.items;
items.push(item)
this.setState({items})
}
  deleteItem = (id) =>{
   let items=this.state.items;
   let i =items.filter(item => {
     return id !== item.id
   })
   items.splice(i,1);
   this.setState({items:items})
  }
  render() {
    return (
      <div >
   <div className="container">
     <div className="row">
     <Todoitems items={this.state.items} deleteItem={this.deleteItem}/>
     </div>
     <div className="row">
<Additems addItem={this.addItem}/>  
</div>
      </div></div>
    );
  }
}
export default App;
