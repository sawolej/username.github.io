
//ELements

// const apps = document.querySelector("#os_apps")
const apps = document.getElementById("os_apps")
let menu = document.querySelector("#os-ct-menu")
const os_window = document.querySelector(".app_window")
const brand_window = document.querySelector(".brand")
const app_main = document.querySelector ("#app-main")
const maximise = document.querySelector("#maximise")
const shorter = document.querySelector("#shorter")
const cross = document.querySelector("#cross")
const taskbar = document.querySelector ("#taskbar")
const pickedOnes = []
/* Sound effects */
const click = new Audio("sounds/click.mp3")
// const con = new Audio("sounds/not.wav")


//Operations
/* Reseting window */
close(os_window)
/* Creating apps */
create_app("File manager", 'pics/icon_file.png', "file-manager")
create_app("Recycle bin", "pics/icon_bin.png", "recycle-bin")
create_app ("Settings", "pics/icon_settings.png", "settings")
create_app("System Info", "pics/icon_system.png", "system-info")
create_app("Whats that?", "pics/icon_game.png", "game")



//Functions
function click_game() {
    window.location.href="mainGame.html"
}
function create_app (name, image, id) {
    let app = document.createElement("div")
    app.classList.add("app")
    app.id = id
    if (app.id=="game"){
       app.setAttribute("onclick", "click_game()")
    }else{
    app.setAttribute("onclick", "window_open('" + id + "')")
    }
    app.oncontextmenu = e => {
        click.play()
        // open_menu(e, id)
        window_open(id)
    }

    let img = document.createElement("img")
    img.src = image
    img. setAttribute("alt", name)
    let p = document.createElement("p")
    p.innerText = name
    app.appendChild (img)
    app.appendChild (p)
    apps.appendChild (app)
}

function open (tag) {
    tag.style.display = "inline-block"
}

function close (tag) {
    tag.style.display = "none"
}

function window_open (id) {
    click.play()
    brand_window.innerHTML = ""
    app_main.innerHTML = ""
    init_window()

    // let main = document.querySelector("#" + id)
    let main = document.getElementById(id)

    let img = document.createElement("img")
    img.src = main.childNodes[0].src
    img.setAttribute("alt", main.childNodes[0].getAttribute("alt"))

    let p = document.createElement("p")
    p.innerText = main.childNodes[1].innerText
    brand_window.appendChild(img)
    brand_window.appendChild(p)

    open(os_window)
}

function init_window() {
    close(shorter)
    maximise.onclick = () => {
        click.play()
        maximise_window()
    }
    shorter.onclick = () => {
        click.play()
        shorter_window()
    }
    cross.onclick = () => {
        click.play()
        close(os_window)
        os_window
    }
    
}

function maximise_window () {
    open(shorter)
    close(maximise)
    window.restoreX = os_window.style.left
    window.restoreY = os_window.style.top
    os_window.style.top = 0
    os_window.style.left = 0
    os_window.style.width = "100%"
    os_window.style.height = "100vh"
}

function shorter_window () {
    open(maximise)
    close(shorter)
    os_window.style.top = window.restoreY
    os_window.style.left = window.restoreX
    os_window.style.width = "60%"
    os_window.style.height = "60vh"
}

window.onclick = e => {
    if (menu.classList.contains ("active")) {
        menu.classList.remove("active")
    }
}

os_window.ondragend = e => {
    let go_top = e.pageY
    let go_left = e.pageX
    if(go_top < 0) {
        go_top= e
    }
    if(go_left < 0) {
        go_left = 0
    }
    os_window.style.top = go_top + "px"
    os_window.style.left = go_left + "px"
}