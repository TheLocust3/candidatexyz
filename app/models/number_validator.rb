class NumberValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
        if value.nil?
            return
        end

        unless value =~ /^\d$/
            record.errors[attribute] << (options[:message] || 'contains non-numbers')
        end
    end
end