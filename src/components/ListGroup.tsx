// import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = -1;
  // below is a function : An Event handler : Its job is to handle the click event
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {" "}
      {/* one single element is needed for a component / <></> */}
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {/* how to make a for loop in tsx */}
        {items.map((item, index) => (
          <li
            className="list-group-item active" //bootstrap class from the main.tsx file 
            key={item}
            onClick={handleClick} // not calling the function but simply passing a reference to be to it once clicked by the user during runtime
          >
            {item}
          </li>
        ))}
        {/* the key refrences the id of the item from items */}
      </ul>
    </>
  );
}
export default ListGroup;
