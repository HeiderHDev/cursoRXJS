import { map, range } from 'rxjs';

range(1,5).pipe(
    map( val => val * 10 )
).subscribe( console.log );
