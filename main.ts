/*
T-OS
Tanner's Operating System
Made by TannerVoltageOfficial on GitHub
*/
//#region variables
let homeMenu
let version = "indev"
let aboutText = "T-OS V" + version + "."
//#endregion
//#region functions
function showAbout() {
    game.splash("About T-OS", aboutText)
}
function homeSelect(selection:string) {
    switch (selection) {
        case "About T-OS":
            showAbout()
            break;
        case "Logout":
            game.splash("Feature not implemented")
            break;
        }
}
function showHome() {
    homeMenu = miniMenu.createMenu(miniMenu.createMenuItem("About T-OS",assets.image('infoIcon')), miniMenu.createMenuItem("Logout"))
    homeMenu.onButtonPressed(controller.A,homeSelect)
}
//#endregion
//#region main
scene.setBackgroundColor(2)
showHome()
//#endregion