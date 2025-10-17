import Childlist from "./listprops"

function List(props){
    const namelist=["ben","tony","Steve","alex"]
    const persons =[
        {   
            id:"1",
            name:"Max",
            age:40,
            skill:"Java"
        },

        {
            id:"2",
            name:"Ben",
            age:40,
            skill:"React"
        },

        {
            
            id:"3",
            name:"Peter",
            age:40,
            skill:"NoSQL"
        }

    ]
    
    const list=namelist.map((i,index)=> <h1 key={index}>index: {index} data: {i} </h1>)
    return(
        <div>{list}</div>
    )
    //index can be used as keys only when we dont hve an unique element in the list , only when the list is static ans only when it is ordered..or else we can go for an npm package that generates uniuw id for every element
    //keys are unique dtat in list that is sent as an attribute to a child component..
    // it helps react to identify changes easily an helps avoiding
    //frequent muting as it identifies data by using the key
    // keys cannot be accesed in child component,if wanted it has to be sent as a seperate prop

    
    
    
    // let arr=["1,2,3,4,5,6","ABCDEF"]
    // // let mapp=arr.map(i => i.concat(" concated  "))
    // return(
        
    //     <div>{arr.map(i => <h3>{i.concat(" concated  ")}</h3>)}</div>
        
    // )
}
export default List