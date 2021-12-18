import Product  from "./Product";

function CardB(props) {
  const data = props.data;
 
  const handleDelete=(id)=>{
    props.dataDelete(id);
  }
  const handleEdit=(id)=>{
    props.dataEdit(id);
  }
  return (
    <>
      {data.map((todo) => (
        <div key={todo.id}>
        <Product todo = {todo}  cardDelete = {handleDelete} cardEdit={handleEdit}/>
        </div>
      ))}
    </>
  );
}

export default CardB;
