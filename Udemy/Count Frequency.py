# Return the frequency of each character in the string
# Create a dictionary
# Check if character is in dict
# If not in dict set its value to 1

def frequencyOfCharacters(str):
    result={}
    for i in str:
        if ( i in result):
            result[i]+=1
        else:
            result[i] = 1
    print(result)

frequencyOfCharacters('hello')
