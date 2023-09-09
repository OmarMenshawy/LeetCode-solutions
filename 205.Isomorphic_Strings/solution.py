def isIsomorphic(s: str, t: str) -> bool:
    """Checking if `s` is isomorphic to `t`"""
    checking_var = 0
    chars_dict = {}
    for i in s:
        # connecting each same index chars in a dictionry
        chars_dict[i] = t[s.find(i)]
    for i in t:
        # checking if key's value is equal to this index
        if chars_dict[s[t.find(i)]] == i:
            checking_var += 1
    return True if checking_var == len(s) else False


# case 1
print(isIsomorphic("egg", "add"))  # True

# case 2
print(isIsomorphic("foo", "bar"))  # False

# case 3
print(isIsomorphic("paper", "title"))  # True
