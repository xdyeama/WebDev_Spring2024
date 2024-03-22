def solve(s):
    name = s.split(' ')[0]
    surname = s.split(' ')[1]

    return name.capitalize() + ' ' + surname.capitalize()


s = input()

res = solve(s)

print(res)