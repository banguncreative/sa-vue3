export default {
    chop(obj, n){
        var new_arr = [];
        while(obj.length > 0){
            new_arr.push(obj.splice(0,n))
        }

        return new_arr;
    },
    chopPhone(txt, n){
        var obj = txt.split("").reverse();
        var new_arr = [];
        while(obj.length > 0){
            new_arr.push(obj.splice(0,n))
        }

        return new_arr.map(e => e.reverse().join("")).reverse().join(" ");
    },
    wame(_tel, _text){
        _text = encodeURI(_text);
        return  `https://wa.me/${_tel}?text=${_text}`
    }
}