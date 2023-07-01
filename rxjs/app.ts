import { range, filter, map } from 'rxjs';


(function ():void {
    console.log("Let's start");

    range(1, 200)
        .pipe(
            filter((x) => x % 2 === 1),
            map((x) => x + x)
        )
        .subscribe((x) => console.log(x));
})();