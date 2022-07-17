import { NyanCat } from "./nyancat.ts";

import { readKeypress } from "https://deno.land/x/keypress@0.0.8/mod.ts";

NyanCat.start();
for await (const keypress of readKeypress()) {
    if (keypress.ctrlKey && keypress.key === 'c') {
        NyanCat.stop();
    }
}
