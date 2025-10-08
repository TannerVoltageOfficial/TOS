let menu: miniMenu.MenuSprite;
class homeMenu {
error = false;
    selectItem(item: string) {
        homeMenu.close();
        switch (item) {
            default:
                game.splash("Not implemented!")
                homeMenu.open();
            break;
    }
}
static open() {
    menu = miniMenu.createMenuFromArray([
        miniMenu.createMenuItem("About", assets.image`about`),
    ]);
    menu.onButtonPressed(controller.A, this.selectItem)
}
static close() {
    menu.destroy();
}
}
let home = new homeMenu();
homeMenu.open();
