/*
T-OS
Tanner's Operating System
Made by TannerVoltageOfficial on GitHub
*/
//#region variables
let homeMenu
let version = "0.0.1"
let aboutText = "T-OS V" + version + "."
//#endregion
//#region functions
function showAbout() {
    game.splash("About T-OS", aboutText)
}
function homeSelect(selection:string) {

}
function showHome() {
    homeMenu = miniMenu.createMenu(miniMenu.createMenuItem("About T-OS"), miniMenu.createMenuItem("Close"))
    homeMenu.onButtonPressed(controller.A,homeSelect)
}
//#endregion
//#region main
scene.setBackgroundColor(2)
showHome()
//#endregion