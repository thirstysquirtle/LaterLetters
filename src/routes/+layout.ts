export const prerender = true;
export const ssr = false;

declare global {
    export type Letter = {
        body: string;
        dateCreated: Date;
        tagIds?: string[];
        tags?: Tag[];
    }
  

}
// import { openDB } from "idb";



// export async function load() {
//     const db = await openDB("LaterLetters", 1, {
//         upgrade: (db) => {
//             const letters = db.createObjectStore("letters", { keyPath: "id", autoIncrement: true })
//             letters.createIndex("dateCreated", "dateCreated", { multiEntry: false, unique: false })
//             letters.createIndex("tags", "tagIDs", { multiEntry: true, unique: false })
//         }
//     })


//     return {
//         addLetter: async (letter: Letter) => {
//             try {
//                 await db.put("letters", letter)
//                 return 0
//             }
//             catch (e) {
//                 return e
//             }
//         }
//     }


// }


