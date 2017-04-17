# Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

# If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

# For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

# Evaluate the sum of all the amicable numbers under 10000.

def sumAll(n)
  sum = 0
  (1..n).each do |i|
    puts "Is #{i} amicable?"
    if isAmicable(i)
      sum += i
      puts "YUP!"
    end
  end

  sum
end

def sumProperDivisors(n)
  sum = 0
  (1..n-1).each do |i|
    if isProperDivisor(n, i)
      sum += i
    end
  end

  sum  
end

def isAmicable(n)
  potentialMatch = sumProperDivisors(n)
  puts "Testing if #{n} is amicable to #{potentialMatch}"
  sumProperDivisors(potentialMatch) == n && n != potentialMatch  
end

def isProperDivisor(numerator, denominator)
  numerator % denominator == 0 && numerator != denominator
end

puts "WE DON' NEED NO STINKING TEST FRAMEWORKS."
puts " "
puts "EXPECTING FALSE"
puts isProperDivisor(11, 2)
puts "EXPECTING TRUE"
puts isProperDivisor(10, 2)

puts " "
puts "EXPECTING 220"
puts sumProperDivisors(284)
puts "EXPECTING 284"
puts sumProperDivisors(220)

puts " "
puts "EXPECTING TRUE"
puts isAmicable(284)
puts "EXPECTING TRUE"
puts isAmicable(220)
puts "EXPECTING FALSE"
puts isAmicable(221)

puts " "
puts sumAll(100)
puts sumAll(9999)
