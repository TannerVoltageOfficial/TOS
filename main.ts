/*
T-OS
Tanner's Operating System
Made by TannerVoltageOfficial on GitHub
*/
// --START USELESS VARIABLES--
let homeMenu: miniMenu.MenuSprite
let version = "0.0.1"
let aboutText = "T-OS V" + version + ". \n \nMade by TannerVoltageOfficial on GitHub."
// --START USELESS FUNCTIONS--
function showAbout() {
    game.showLongText(aboutText, DialogLayout.Full)
}
function homeSelect(appName: string) {
    homeMenu.close()
    switch (appName) {
        case "About T-OS":
            showAbout()
            break
        default:
            game.showLongText("Unfortunately, " + appName + " has stopped.", DialogLayout.Bottom)
            break
    }
    pauseUntil(() => !controller.A.isPressed())
    showHome()
}
function showHome() {
    homeMenu = miniMenu.createMenuFromArray([miniMenu.createMenuItem("About T-OS", assets.image`infoIcon`), miniMenu.createMenuItem("Close", assets.image`iconLeave`)])
    homeMenu.onButtonPressed(controller.A, homeSelect)
}
// --START USELESS CODE--
scene.setBackgroundColor(2)
showHome()