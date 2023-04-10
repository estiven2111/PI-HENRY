import stylepage from "./Paginate.module.css"

const Paginates=(props)=>{
    let numbers=[]
let aux=1
let cantidad=Math.ceil(props?.allVideogamesLength/15)
// while(cantidad>0){
    
// cantidad=Math.ceil(props?.allVideogamesLength/15)
// console.log("canti",)
// if(cantidad>=0){
    
//     numbers.push(aux)
//     aux++
//  }
// }
for (let i = 0; i < cantidad; i++) {
    numbers.push(aux)
    aux++
    
}
const handlerPaginater=(numero)=>{
props.setPage(numero)
}
const handlerAdelante=()=>{
    if(props.page<aux-1){
         props.setPage(props.page+1)
    }}

    
    const handlerAtras=()=>{
        if(props.page>1){
             props.setPage(props.page-1)
        }
   

}
return(
    <div>
         <button className={stylepage.btn}   onClick={handlerAtras}>{"<"}</button>
        {
            numbers?.map(numero=>{
                return <button className={stylepage.btn} onClick={()=>handlerPaginater(numero)} key={numero}>{numero}</button>
            })
        }
        <button className={stylepage.btn}  onClick={handlerAdelante}>{">"}</button>
    </div>
)
}
export default Paginates