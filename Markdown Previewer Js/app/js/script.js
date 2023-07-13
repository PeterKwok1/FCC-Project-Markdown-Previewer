marked.use({
    breaks: true
})

const editor = document.querySelector('#editor')
const preview = document.querySelector('#preview')

function convert() {
    const input = editor.value
    preview.innerHTML = marked.parse(input)
}

const text =
    '# Here is a sample heading\n\nHere is a sample [link](https://github.com/PeterKwok1)\n\n## Here is a sample sub heading\n\nHere is sample code, `<div><div>`\n\nHere is a sample code block,\n```\nfunction sampleFunc(param1, param2) {\n    return param1 + param2\n}\n```\n\nHere is a sample unordered list,\n- first item\n- second item\n- third item\n\nHere is a sample ordered list,\n1. first item\n2. second item\n3. third item\n\nHere is a sample table,\n\nHeader 1|Header 2|Header 3\n---|---|---\ncontent|content|content\ncontent|content|content\n\nHere is a sample blockquote,\n> Sample blockquote\n\nHere is an image,\n\n![Cat](https://wallpaperaccess.com/full/235613.jpg)\n\nHere is **bolded text**.\n\nHere is _italic text_.\n\nHere is ~~crossed out text~~.'
editor.textContent = text
convert()

editor.addEventListener('input', convert)



