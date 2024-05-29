function findDuplicate(str) {
    let st = []

   for( let char of str) {
     if(char == ')')
        {
            let popped_ele = 0;
            while(st.length && st[st.length - 1] != '(') {
                st.pop();
                popped_ele++;
            }
            st.pop();
            if (popped_ele <=1) {
                return true;
            }
        } else{
            st.push(char)
        } 

        console.log(st)
   }
return false;
}


console.log(findDuplicate('(b+(a))'))