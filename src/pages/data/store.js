import { createRef } from "react"

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  images: ["./001.jpg", "./002.jpg", "./003.jpg"],
  top: createRef()
}

export default state
