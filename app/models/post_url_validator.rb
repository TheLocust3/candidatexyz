class PostUrlValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
        full_urls = Post.where(:post_type => record.post_type).select { |post| post != record }.map{ |post| "#{post.post_type}/#{post.url}" }

        if full_urls.include? "#{record.post_type}/#{record.url}"
            record.errors[attribute] << (options[:message] || 'is not unique')
        end
    end
end