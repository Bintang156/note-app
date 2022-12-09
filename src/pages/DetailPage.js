import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Notes from "../components/Notes";
import { deleteNote, getNote} from "../utils/network-data";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState(null);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    })
  }, [id]);  

  async function onDeleteHandler(id) {
    await deleteNote(id);
      navigate("/");

    
  }

          return (
            <div>
              <Notes {...note} onDelete={onDeleteHandler}/>
            </div>
          )
        }
  
export default DetailPage;
