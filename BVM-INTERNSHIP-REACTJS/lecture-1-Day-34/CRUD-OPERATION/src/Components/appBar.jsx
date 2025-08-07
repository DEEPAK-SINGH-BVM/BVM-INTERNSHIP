import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
  /*
  import { useState } from "react";

const LanguageForm = () => {
  const [user, setUser] = useState({ language: [] });
  const [submitted, setSubmitted] = useState([]);

  const inputHandle = (e) => {
    const { name, value, checked } = e.target;

    if (name === "language") {
      const current = user.language || [];
      let updated = [];
    
      if (checked) {
        updated = [...current, value]; // Add value
      } else {
        updated = current.filter((l) => l !== value); // Remove value
      }
    
      setUser({ ...user, language: updated });
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(user.language); // only update on submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select Language:</label><br />
        
        <input
          type="checkbox"
          name="language"
          value="English"
          onChange={inputHandle}
        />
        English

        <input
          type="checkbox"
          name="language"
          value="Hindi"
          onChange={inputHandle}
        />
        Hindi

        <input
          type="checkbox"
          name="language"
          value="Gujarati"
          onChange={inputHandle}
        />
        Gujarati

        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <p>Selected: {submitted.join(", ")}</p>
    </div>
  );
};

export default LanguageForm;

// import { useState } from "react";

// const ImageUploadTable = () => {
//   const [user, setUser] = useState({image: "" });
//   const [list, setList] = useState([]);

//   const imageHandler = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imgURL = URL.createObjectURL(file);
//       setUser({ ...user, image: imgURL });
//     }
//   };

//   const submitHandle = (e) => {
//     e.preventDefault();
//     setList([...list, user]);
//     setUser({ name: "", image: "" });
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandle}>
//         <input type="file" onChange={imageHandler} />
//         <button type="submit">Submit</button>
//       </form>

//       <table border={1}>
//         <thead>
//           <tr>
   
//             <th>Profile Pic</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 <img src={item.image} alt="Profile" width="50" height="50" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ImageUploadTable;
EDIT

// State to track which item is being edited
const [editIndex, setEditIndex] = useState(null);

//  Edit button function
function editItem(index) {
  setUser(list[index]);
  setEditIndex(index);
}

//  Modified submit function (update if editing)
function submitHandle(e) {
  e.preventDefault();
  if (editIndex !== null) {
    list[editIndex] = user;
    setList([...list]);
    setEditIndex(null);
  } else {
    setList([...list, user]);
  }
  setUser(User);
}

  function imageHandler(e) {
    let imageTarget = e.target.files;
    // console.log("image target ==>",imageTarget);
    if (imageTarget && imageTarget[0]) {
      // let check = (URL.createObjectURL(imageTarget[0]))
      // console.log("check ==>",check);
      setImage(URL.createObjectURL(imageTarget[0]));
    }
  }

  const imageHandler = (e) => {
  const files = Array.from(e.target.files);
  const urls = files.map(file => URL.createObjectURL(file));
  setUser({ ...user, images: urls });
};

  */
}


