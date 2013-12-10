url = "http://distilleryimage3.s3.amazonaws.com/6525292660d111e3ae741226caf37923_8.jpg"
url_proxy = "http://localhost:8000/"

require 'benchmark'
result = Benchmark.measure do 
  20.times do 
    `curl #{url}`
  end
end

result_proxy = Benchmark.measure do
  20.times do 
    `curl #{url_proxy}`
  end
end

puts result
puts result_proxy
