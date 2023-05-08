import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-id="${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "product") {
            for (const product of products) {
                if (product.id === parseInt(itemClicked.dataset.id)) {
                    const priceWithTwoDecimals = product.price.toFixed(2);
                    window.alert(`${product.name} costs $${priceWithTwoDecimals} `)
                }
            }
        }
    }
)
