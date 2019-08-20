window.onload = init;

function init() {
	const elements = document.getElementsByClassName('div');

  const down$ = rxjs.fromEvent(elements, 'mousedown');
  const up$ = rxjs.fromEvent(document, 'mouseup');
  const move$ = rxjs.fromEvent(document, 'mousemove');

  down$.pipe(
      rxjs.operators.mergeMap(down => {
          return move$.pipe(
              rxjs.operators.map(move => {
                return  {
                  target: down.target,
                  x: move.clientX - down.clientX,
                  y: move.clientY - down.clientY
                }
              }),
            rxjs.operators.takeUntil(up$)
          );
        })
  ).subscribe( e => {
    e.target.style.transform = `translate(${e.x}px, ${e.y}px)`;
  });
}