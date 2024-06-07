function tower(n, from, to, aux) {
    if(n==1)
        {
            console.log(`moving disk 1 from ${from} to ${to}`)
            return;
        }

    tower(n-1, from, aux, to )
    console.log(`moving disk ${n} from ${from} to ${to}`);
    tower(n-1, aux, to, from)
}

// move 3 disk from A to B one by one
// in such a way that only small disk is on top of the stack
tower(3, 'A', 'B', 'C')