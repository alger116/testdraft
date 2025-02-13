require 'erb'
require 'time'

template_path = 'vendor/bundle/ruby/2.6.0/gems/jekyll-3.9.5/lib/site_template/_posts/0000-00-00-welcome-to-jekyll.markdown.erb'
output_path = 'vendor/bundle/ruby/2.6.0/gems/jekyll-3.9.5/lib/site_template/_posts/2023-10-01-welcome-to-jekyll.markdown'

template = File.read(template_path)
result = ERB.new(template).result(binding)

File.write(output_path, result)