import * as texts from "./english.lang"
// --- Constants ---
// Using constants for "magic numbers" and strings makes the code easier to read and maintain.
const BACKGROUND_COLOR = 2;
const MENU_TOP_POSITION = 25;


// --- Menu Logic ---
/**
 * Handles the selection from the main home menu.
 * @param selection The string title of the menu item that was selected.
 */
function handleHomeMenuSelection(selection: string) {
    switch (selection) {
        case texts.MENU_ITEM_LOGOUT:
            // Resets the game, effectively logging the user out.
            control.reset();
            break;
        case texts.MENU_ITEM_ABOUT:
            // Shows a splash screen with OS information.
            game.splash("T-OS", "Version " + osVersion);
            break;
    }
}

// --- Initialization ---
scene.setBackgroundColor(BACKGROUND_COLOR);
game.splash("Welcome to T-OS", texts.VERSION_TEXT);

const homeMenu = miniMenu.createMenu(
    miniMenu.createMenuItem(texts.MENU_ITEM_ABOUT, assets.image`infoIcon`),
    miniMenu.createMenuItem(texts.MENU_ITEM_LOGOUT)
);
homeMenu.top = MENU_TOP_POSITION;
homeMenu.onButtonPressed(controller.A, handleHomeMenuSelection);
