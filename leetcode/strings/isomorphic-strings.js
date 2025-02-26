//https://leetcode.com/problems/isomorphic-strings/description/

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let charCountS = {}
    let charCountT = {}

    for (let i = 0; i < s.length; i++) {
        // charCountS[s[i]] = (charCountS[s[i]] || 0) + 1
        // charCountT[t[i]] = (charCountT[t[i]] || 0) + 1
        if (!(s[i] in charCountS)) {
            charCountS[s[i]] = i;
        }

        if (!(t[i] in charCountT)) {
            charCountT[t[i]] = i;
        }

        if (charCountS[s[i]] !== charCountT[t[i]]) {
            return false
        }
    }

    // console.log(charCountS, charCountT)
    return true
};

//make test for aaabbbba and bbbaaaba, egg and add, foo and bar, and paper and title
