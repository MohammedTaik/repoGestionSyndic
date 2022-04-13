import React from 'react';
import getCase from "../ApiDetailDossier/ApiPosts";

function CreePost({ input , setInput ,posts,setposts }){
    const onInputChange =(e)=>{
        setInput(e.target.value);
    };
      async function onClickSubmit (e){
        e.preventDefault();  
        const cases = await getCase();
        console.log(cases)
         fetch('http://localhost:5052/api/Note/',{
             method : 'post',
             headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
             },
             body :JSON.stringify({
                note:input ,
                type :"note",
                idCase:cases.idCase
             })
         }).then(response=>{
             console.log(response)
             if(response.status==200){
                 console.log("success")
             }
             return response.json
         }).then((data)=>{
            console.log(posts)
            setInput("");
             setposts([...posts,data])
          }) 
        }
    return(
    <>
    <form onSubmit={onClickSubmit} >
       <div id="create">
        <input type="text" className='creeNote' 
        placeholder='Saisissez une note...' 
        onChange={onInputChange}
        value={input}
        />
        <div id="afficheNote">
            <button type="submit" id="logoAffiche" />
        </div>
        </div>
    </form>
    </>
    );
}
export default CreePost ;