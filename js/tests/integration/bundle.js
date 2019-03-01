import 'popper.js'
import {
  Tooltip
} from '../../../dist/js/bootstrap.esm'

window.addEventListener('load', () => {
  Array.from(document.querySelectorAll('[data-toggle="tooltip"]'))
    .map((tooltipNode) => new Tooltip(tooltipNode))
})
