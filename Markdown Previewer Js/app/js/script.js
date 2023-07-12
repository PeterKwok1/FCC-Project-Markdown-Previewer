const editor = document.querySelector('#editor')
const preview = document.querySelector('#preview')

function convert() {
    const input = editor.value
    preview.innerHTML = marked.parse(input)
}

const text =
    '# Here is a sample heading\n\nHere is a sample [link](https://github.com/PeterKwok1)\n\n## Here is a sample sub heading\n\nHere is sample code, `<div><div>`\n\nHere is a sample code block,\n```\nfunction sampleFunc(param1, param2) {\n    return param1 + param2\n}\n```'
editor.textContent = text
convert()

editor.addEventListener('input', convert)



