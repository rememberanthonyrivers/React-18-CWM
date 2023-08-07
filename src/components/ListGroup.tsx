// import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  


  return (
    <>                                        {/* one single element is needed for a component / <></> */}
      <h1>List</h1>
      
      <ul className="list-group">
                                              {/* how to make a for loop in tsx */}
        {items.map((item) => (
          <li key={item}>{item}</li> 
        ))}
                                              {/* the key refrences the id of the item from items */}
      </ul>
    </>
  );
}
export default ListGroup;