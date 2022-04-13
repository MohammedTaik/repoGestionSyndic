import React , { useState } from "react";
import ModalStatut from "./Modal/ModalFichier"
function Statut({ Statuts ,onChange }) {
  return (
    <>
      <form>
        <select aria-label="State" className="comboST" onChange={onChange}>
          <option value="Select" >Status</option>
          {Statuts.map((st) => {
            return <option value={st.Statut}>{st.statusName} </option>;
          })}
        </select>
     
      </form>
    
      <div id="titleDT">
        <p>Augmentation des frais de syndic</p>
      </div>
      
    </>
  );
}
export default Statut;
