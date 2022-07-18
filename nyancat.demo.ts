import { NyanCat } from "./nyancat.ts";

import { readKeypress } from "https://deno.land/x/keypress@0.0.8/mod.ts";

NyanCat.start();
for await (const keypress of readKeypress()) {
    // Stop the animation on `Ctrl+c` or `q`
    if ((keypress.ctrlKey && keypress.key === 'c') || keypress.key === 'q') {
        NyanCat.stop().then(()=>{
            console.log("Quit");
            Deno.exit(0);
        });
    }
}
