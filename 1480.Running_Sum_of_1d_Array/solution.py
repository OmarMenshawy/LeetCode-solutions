def runningSum(nums):
    answer = []
    index = 0
    for num in nums:
        for num2 in nums[:index]:
            num += num2
        answer.append(num)
        index += 1
    else:
        return answer


# case 1
print(runningSum([1, 2, 3, 4]))

# case 2
print(runningSum([1, 1, 1, 1, 1]))

# case 3
print(runningSum([3, 1, 2, 10, 1]))
