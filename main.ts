let menu: miniMenu.MenuSprite;
function selectItem(item: string) {
    switch (item) {
        default:
            game.splash("Not implemented!")
            break;
    }
}
function createOsMenu() {
    menu = miniMenu.createMenuFromArray([
        miniMenu.createMenuItem("About", assets.image`about`),
    ]);
    menu.onButtonPressed(controller.A, selectItem)
}
createOsMenu();
