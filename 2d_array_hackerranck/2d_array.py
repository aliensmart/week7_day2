arr = [[1,1,1,0,0,0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]

def hourglassSum(arr):
    new_list = []
    for i in range(len(arr) - 2):
        for j in range(len(arr[i]) - 2):
            total = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            new_list.append(total)
    max_l = max(new_list)
    print(max_l)

hourglassSum(arr)

# (0,4) (0,4)
# i =0
# j=0
# arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1]+ arr[2][0] + arr[2][1] + arr[2][2]
