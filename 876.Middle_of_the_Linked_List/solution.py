def middleNode(head):
    if len(head) % 2 == 0:
        index = len(head) / 2
        return head[int(index)]
    else:
        index = len(head) / 2 - 0.5
        return head[int(index)]


print(middleNode([1, 2, 3, 4, 5]))
print(middleNode([1, 2, 3, 4, 5, 6]))
