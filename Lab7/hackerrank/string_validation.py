def check_string_properties(s):
    print(s.isalnum())
    print(s.isalpha())
    print(s.isdigit())
    print(s.islower())
    print(s.isupper())


if __name__ == "__main__":
    s = input().strip()
    check_string_properties(s)
