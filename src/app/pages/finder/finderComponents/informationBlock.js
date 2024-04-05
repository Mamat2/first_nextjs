"use client"


export default function InformationBlock ({information}){

    if (information.Title)
    {
     return(
        
        <div>
        {information.Title}
        <br/>
        {information.Year}
        </div>
    )  
    }
    else {
    return(
        
    <div> ничего нет</div>
    )
    }


}