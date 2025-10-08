import { texts.version as v } from "./languages"
export namespace aboutApp {
    export function mainActivity() {
        game.splash("About T-OS", v);
    }
}