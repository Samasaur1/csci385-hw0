function divisorsFor(n: number): number[] {
    if (n < 1) {
        return [];
    }

    let arr: number[] = [];
    let d: number = 1;
    while (d * d <= n) {
        console.log(`d is ${d}`);
        if (n % d == 0) {
            console.log(`n % d is 0; assuming divisor`);
            arr.push(d);
            let other = n / d;
            if (d != other) {
                console.log("other is not d; pushing");
                arr.push(other);
            }
        }
        d++;
    }
    return arr;
}


function divisors(n: number) {
    const ds = divisorsFor(n);
    ds.sort((a, b) => a - b);
    switch (ds.length) {
        case 0:
            alert(`${n} has no divisors`);
            break;
        case 1:
            alert(`The divisor of ${n} is ${ds[0]}`);
            break;
        default:
            const last = ds.pop();
            alert(`The divisors of ${n} are ${ds.toString()} and ${last}`);
    }
}
