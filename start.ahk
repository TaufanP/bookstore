PROJECT_DIR := "D:\code\reactNative\bookstore"
DELAY := 550

Window4Tiles(direction1, direction2 := "{Up}"){
    Sleep DELAY
    Send "{LWIN down}" . direction1
    Sleep DELAY
    Send direction2
    Sleep DELAY
    Send "{LWIN up}"
}


Run "cmd /k npm start --reset-cache", PROJECT_DIR
Window4Tiles("{Left}")
Run "cmd /k npm run server", PROJECT_DIR
Window4Tiles("{Right}")
Send "!{Tab}"
Send "!{Tab}"
Window4Tiles("{Left}", "{Down}")
Send "#^{Left}"
Run "cmd /k emulator @Pixel_5_API_30"
Run "cmd /k code . && exit", PROJECT_DIR
Sleep 5000
Send "!{Tab}"
Sleep DELAY
Send "#{Up}"
Send "#^{Left}"
Run "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
