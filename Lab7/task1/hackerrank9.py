#Find the Runner-Up Score!
def find_runner_up_score(n, arr):
    unique_scores = list(set(arr)) 
    unique_scores.sort(reverse=True) 
    return unique_scores[1]
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    print(find_runner_up_score(n, arr))
    