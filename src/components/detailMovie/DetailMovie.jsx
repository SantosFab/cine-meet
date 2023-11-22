import { useLocation , useParams } from "react-router-dom";

function DetailMovie() {
  
  const location = useLocation();
  console.log("Location state:", useParams());
  console.log("Location state:", location);


  return (
    <>
      <div>Opa tá funcionando</div>
      <div>Bora construir mais um componente</div>
    </>
  );
}

export default DetailMovie;
