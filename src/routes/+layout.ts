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
