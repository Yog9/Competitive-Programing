myString = input()
vowels = ['a', 'e', 'i', 'o', 'u', 'y']
result = ''
for letter in myString:
    if letter.isupper():
        letter = letter.lower()
    if letter not in vowels:
        result = result + '.' + letter
print (result)