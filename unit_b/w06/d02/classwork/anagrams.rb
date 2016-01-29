require("pry")
def test_the_word(word1, word2)
	if word1.chars.sort.join == word2.chars.sort.join
		puts "Yes! #{word1} is an anagram of #{word2}. They both have the letters: #{word2.chars.sort.join}"
	else
		puts "No! #{word1} and #{word2} are NOT Anagrams."
	end
end
binding.pry
