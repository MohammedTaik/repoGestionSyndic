import React from "react";

export default function Dossier({folder}) {
  function home(e) {
     var params = new URLSearchParams();
    params.append("id", folder.idCase); 
        window.location.href = "http://localhost:3000/zebi?"+ params.toString() ;
  }
  return (
      <div className="note"  onClick={()=>{
        home();
        }
       }>
        <div className="dossier-image"></div>
        <div id="statut">
             {folder.statusNavigation.statusName}
        </div>
        <p>{folder.title}</p>
    </div>
  ); 
}

