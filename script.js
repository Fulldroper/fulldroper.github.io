window.onload = () => {
  const changeTheme = bool => (document.body || document.querySelector("body")).classList[bool ? "add" : "remove"]("darkmode");
  const theme = document.querySelector("#dark-switch");
  const loadPins = async arr => {
    const pinsLoader = document.querySelector("#pinsLoader")
    for (const value of arr) {
      const svg = await fetch(`https://fd-kofuku.herokuapp.com/?q=https://github-readme-stats.vercel.app/api/pin/?username=fulldroper%amprepo=${value}`)
      pinsLoader.innerHTML += `<a href="https://github.com/Fulldroper/${value}">${
        await svg.text()
      }</a>`
    }
  };
  changeTheme(theme.checked);
  loadPins([
    'cors-proxy',
    'tocken-session',
    'file-server',
    'Sierpinski-triangle',
    'caesarCipher',
    'color-convertor'
  ]);
  document.querySelector("#dark-switch").onchange = e => {
    changeTheme(e.target.checked);
  }
}
