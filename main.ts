import { Invoice } from "./classImplementInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne:hasPrint = new Invoice('Vina milk','drink milk',5000000)
const documentTwo:hasPrint = new Invoice('Vietnam Airlines','fly',25000000)

const allDocuments: hasPrint[] =[]
allDocuments.push(documentOne)
allDocuments.push(documentTwo)

console.log(allDocuments);
