import { useEffect } from "react";
function UseDocumentTitle(count){
    useEffect(() =>{
    document.title=`clicked ${count} times`
},[count])

}
export default UseDocumentTitle