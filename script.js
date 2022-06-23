window.onload = () => {
    const changeTheme = bool => (document.body || document.querySelector("body")).classList[bool ? "add" : "remove"]("darkmode")
    const theme = document.querySelector("#dark-switch")
    changeTheme(theme.checked)
    document.querySelector("#dark-switch").onchange = e => {
        changeTheme(e.target.checked);
    }
}