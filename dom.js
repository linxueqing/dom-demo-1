window.dom = {
    create(string) {
        const container = document.createElement("template")
        container.innerHTML = string.trim()
        return container.content.firstChild
        // td元素无效，因为td不能放在div里面
        // const container = document.createElement("div")
        // container.innerHTML = string.trim()
        // return container.children[0]
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}