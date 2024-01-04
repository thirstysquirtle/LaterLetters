export const prerender = true;
export const ssr = false;

import { Tabs } from "$lib/types.ts";


export async function load() {

  return {
    tab: Tabs.Write
  }


}


