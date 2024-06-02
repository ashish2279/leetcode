function reverse(str) {
    str = str.replace(/\s+/g, ' '); // convert multiple spaces into single 
    str = str.trim();
    const arr = str.split(' '); // convert str to array cause its immutable
    let st = [];
    for (let word of arr) {
        st.unshift(word) 
    }

    str = st.join(' '); // reconstruct array from the given string
    return str;
}

console.log(reverse('   this is a sentence     having mupltiple spaces '))