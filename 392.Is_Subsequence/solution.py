def isSubsequence(s: str, t: str) -> bool:
    check_string = ""
    for letter in s:
        for l in t:
            if l == letter:
                check_string += l
                t = t.replace(l, "", 1)
                break
    return check_string == s


# case 1
print(isSubsequence("abc", "ahbgdc"))

# case 2
print(isSubsequence("axc", "ahbgdc"))
