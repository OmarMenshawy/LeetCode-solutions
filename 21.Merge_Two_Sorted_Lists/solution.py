def mergeTwoLists(list1, list2):
    list3 = list1 + list2
    list3.sort()
    return list3


# case 1
print(mergeTwoLists([1, 2, 4], [1, 3, 4]))

# case 2
print(mergeTwoLists([], []))

# case 3
print(mergeTwoLists([], [0]))
