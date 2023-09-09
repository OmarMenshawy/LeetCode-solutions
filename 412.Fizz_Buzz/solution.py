def fizzBuzz(n):
    index = 1
    answer = []
    while index <= n:
        if index % 3 == 0 and index % 5 == 0:
            answer.append("Fizz Buzz")
            index += 1
        elif index % 3 == 0:
            answer.append("Fizz")
            index += 1
        elif index % 5 == 0:
            answer.append("Buzz")
            index += 1
        else:
            answer.append(index)
            index += 1
    return answer


# case 1
print(fizzBuzz(3))

# case 2
print(fizzBuzz(5))

# case 3
print(fizzBuzz(15))
