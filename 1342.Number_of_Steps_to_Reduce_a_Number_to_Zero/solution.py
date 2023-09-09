def numberOfSteps(num: int) -> int:
    i = 0
    while num > 0:
        if num % 2 == 0:
            num /= 2
        else:
            num -= 1
        i += 1
    return i


print(numberOfSteps(14))
print(numberOfSteps(8))
print(numberOfSteps(123))
