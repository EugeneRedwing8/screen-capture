namespace SpriteKind {
    export const Capture = SpriteKind.create()
}
//%color="#000090"
//%icon="\uf03d"
namespace capture {
    //% group="image"
    //% block="draw $src to $to at x $x y $y"
    //% src.shadow=screen_image_picker
    //% to.shadow=variables_get
    //% to.defl=myImage
    //% x.shadow="positionPicker"
    //% y.shadow="positionPicker"
    //% weight=65
    //% inlineInputMode=inline
    export function drawTransparentImage(src: Image, to: Image, x: number, y: number) {
        if (!src || !to) {
            return;
        }
        to.drawTransparentImage(src, x, y);
    }
    //% group="image"
    //% block="capture screen image||border $color"
    //% widthdivider.defl="1"
    //% heightdivider.defl="1"
    //% color.defl="15"
    //% color.shadow="colorindexpicker"
    export function capture_screen_image(color?: number) {
        let screenshot = image.create(scene.screenWidth() + 1, scene.screenHeight() + 1)
        capture.drawTransparentImage(image.screenImage(), screenshot, 0, 0)
        screenshot.drawRect(0, 0, scene.screenWidth(), scene.screenHeight(), color)
        let CaptureSprite = sprites.create(screenshot, SpriteKind.Capture)
        CaptureSprite.setPosition(scene.screenWidth() / 2 + 1, scene.screenHeight() / 2 + 1)
    }
}