def pivotIndex(nums: list) -> int:
    for num in nums:
        leftSide = nums[: num + 1]
        rightSide = nums[num:]
        leftTotal = 0
        rightTotal = 0
        for number in leftSide:
            leftTotal += number
        for number in rightSide:
            rightTotal += number
        if leftTotal == rightTotal:
            return nums.index(num)
    else:
        return -1


print(pivotIndex([1, 7, 3, 6, 5, 6]))
print(pivotIndex([1, 2, 3]))
print(pivotIndex([2, 1, -1]))
