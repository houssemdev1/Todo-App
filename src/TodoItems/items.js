import React from "react";

const Todoitems = props => {
  const { items, deleteItem } = props;
  const length = items.length;
  console.log(length);
  const ListItems = length ? (
    items.map(item => {
      return (
        <div >
          <table class="table">
        
            <tbody>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    })
  ) : (
    <p>rien à afficher</p>
  );
  return (
    <div className="list">
    
      <table class="table">
            <thead>
              <tr>
                <th scope="col">nom</th>
                <th scope="col">age</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            </table>
      {ListItems}
    </div>
  );
};
export default Todoitems;
