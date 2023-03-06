async function getExtensions() {
    const data = await chrome.management.getAll();
    data.forEach((extension) => {
        document.getElementById('list').innerHTML += `
          <div id="${extension.id}">
            <input type="checkbox" id="${extension.id}_checkbox" checked="${extension.enabled}">
            <span>${extension.name}</span>
          </div>`;
        document.getElementById(`${extension.id}_checkbox`).addEventListener('click', toggleExtension(extension.id, extension.enabled))
    })
}
async function toggleExtension(id, enabled, callback=()=>{}) {
    await chrome.management.setEnabled(id, enabled, callback);
}

getExtensions();
// document.getElementById('list').innerHTML = 'test';