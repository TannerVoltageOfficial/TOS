/*
T-OS
Tanner's Operating System
Made by TannerVoltageOfficial on GitHub
*/
// --START USELESS VARIABLES--
let homeMenu
let version = "0.0.1"
let aboutText = "T-OS V" + version + "."
// --START USELESS FUNCTIONS--
function showAbout() {
    game.splash("About T-OS", aboutText)
}
function homeSelect() {

}
function showHome() {
    homeMenu = miniMenu.createMenu(miniMenu.createMenuItem("About T-OS"), miniMenu.createMenuItem("Close"))
    homeMenu.onButtonPressed(ControllerButton.A,homeSelect)
}
// --START USELESS CODE--
scene.setBackgroundColor(2)
showHome()
/* onupdate closed for maintnence
// --START USELESS ONUPDATE--
game.onUpdate(() => {
    // Code in this function will run once per frame. MakeCode
    // Arcade games run at 30 FPS
});
*/