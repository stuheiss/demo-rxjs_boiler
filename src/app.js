import $ from 'jquery'
import Rx from 'rxjs/Rx'

//console.log('RxJS Boiler Running...');

const btn = $('#btn')
const input = $('#input')
const output = $('#output')
const btnpos = $('#btnpos')
const btnStream$ = Rx.Observable.fromEvent(btn, 'click')
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup')
const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove')

btnStream$.subscribe(
  e =>
    console.log(
      e.target.offsetHeight,
      e.target.offsetLeft,
      e.target.offsetTop,
      e.target.offsetWidth
    ),
  err => console.log(err),
  () => console.log('btn done')
)

inputStream$.subscribe(
  e => output.html(e.target.value),
  err => console.log(err),
  () => console.log('input done')
)

moveStream$.subscribe(
  e => btnpos.html(JSON.stringify({ x: e.clientX, y: e.clientY })),
  err => console.log(err),
  () => console.log('input done')
)
