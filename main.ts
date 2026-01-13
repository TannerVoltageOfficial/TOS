/*
T-OS
Tanner's Operating System
Made by TannerVoltageOfficial on GitHub
*/
// --START USELESS VARIABLES--
let homeMenu: miniMenu.MenuSprite
let version = "indev"
let aboutText = `T-OS ${version}. \n \nMade by TannerVoltageOfficial. \n \n Screen resolution\n${screen.width}x${screen.height} \n \nThank you for being here! <3`
let loadProgress: StatusBarSprite
let progress: number
// --START USELESS FUNCTIONS--
function showAbout() {
    game.showLongText(aboutText, DialogLayout.Full)
}
function deleteAllSprites() {
    // destroy all sprites
    sprites.allOfKind(SpriteKind.Player).forEach(sprite => sprite.destroy())
    sprites.allOfKind(SpriteKind.Enemy).forEach(sprite => sprite.destroy())
    sprites.allOfKind(SpriteKind.Food).forEach(sprite => sprite.destroy())
    sprites.allOfKind(SpriteKind.Projectile).forEach(sprite => sprite.destroy())
    sprites.allOfKind(SpriteKind.StatusBar).forEach(sprite => sprite.destroy())
    sprites.allOfKind(SpriteKind.MiniMenu).forEach(sprite => sprite.destroy())
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
    deleteAllSprites()
    showHome()
}
function showHome() {
    scene.setBackgroundColor(9)
    scene.setBackgroundImage(image.create(0,0))
    homeMenu = miniMenu.createMenuFromArray([miniMenu.createMenuItem("About T-OS", assets.image`infoIcon`), miniMenu.createMenuItem("Log out", assets.image`iconLeave`)])
    homeMenu.onButtonPressed(controller.A, homeSelect)
}
function bootSequence() {
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(assets.image`bootScreen`)
    loadProgress = statusbars.create(screen.width, 5, StatusBarKind.Health)
    loadProgress.setPosition(screen.width / 2, screen.height - 2.5)
    loadProgress.setColor(1, 15)
    progress = 0
    while (progress < 100) {
        progress += 1
        loadProgress.value = progress
        pause(5)
    }
    loadProgress.destroy()
}
// --START USELESS CODE--
bootSequence()
showHome()