// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	type Tag = {
        // id: string;
        name: string;
        color: string;
    }

    enum Tabs {
        Write = "Write",
        Swipe = "Swipe",
        Tags = "Tags",
    }
	
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export { 


};
