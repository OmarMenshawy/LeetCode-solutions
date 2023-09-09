def canConstruct(ransomNote=str, magazine=str) -> bool:
    myCheckingString = ""
    for i in ransomNote:
        if i in magazine:
            magazine = magazine.replace(i, "", 1)
            myCheckingString += i
    return True if myCheckingString == ransomNote else False


# case 1
print(canConstruct("a", "b"))  # False

# case 2
print(canConstruct("aa", "ab"))  # False

# case 3
print(canConstruct("aa", "aab"))  # True
