const {renderDOM} = require("./helpers")

let dom
let document

describe("index.html",() => {
    beforeEach(async () => {
        dom = await renderDOM("./index.html")
        document = await dom.window.document
    })
    // TESTS WILL GO HERE
    it("has a button with the correct message", () => {
        const btn = document.querySelector("button")
        expect(btn).toBeTruthy
        expect(btn.innerHTML).toBe("Click me")
    })

    it("h1 is empty when website loads", () => {
        const h1 = document.querySelector("h1")
        expect(h1).toBeTruthy
        expect(h1.textContent).toContain("")
    })

    it("displays morning when the btn is clicked", () => {
        const btn = document.querySelector("button")
        btn.click()
        const h1 = document.querySelector('h1')
        expect(h1.innerHTML).toContain("morning")
    })

    it("displays dark mode when darkmode button is clicked", () => {
        const body = document.querySelector("body")
        const darkModeBtn = document.querySelector("#dark-mode")
        darkModeBtn.click()
        expect(body.className).toBe("dark-mode")
    })
    
    it("adds the input value to the h1", () => {
        const form = document.querySelector("form")
        const h1 = document.querySelector("h1")

        const input = document.querySelector("#name")
        input.value = "Shayann"
        form.dispatchEvent(new dom.window.Event("submit"))
        
        expect(h1.innerHTML).toContain("Shayann")
    })

    it("switches back to lightmode", () => {
        const body = document.querySelector("body")
        const darkModeBtn = document.querySelector("#dark-mode")

        darkModeBtn.click()
        darkModeBtn.click()

        expect(body.className).toBe("")
    })
})