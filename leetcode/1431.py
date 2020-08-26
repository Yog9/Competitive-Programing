# 1431. Kids With the Greatest Number of Candies
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]: 
        final_list =[]
        for i in range(0,len(candies)):
            final_list.append(max(candies) <= candies[i] + extraCandies)
        return final_list
