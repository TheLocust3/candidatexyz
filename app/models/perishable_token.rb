class PerishableToken < ApplicationRecord
    validates :data, presence: true
    validates :good_until, presence: true

    def self.create_good_until_tomorrow(data)
        Token.create( data: data, good_until: DateTime.now + 1 )
    end

    def self.decode(token)
        id = Rails.application.message_verifier(:token).verify(token)

        Token.find(id)
    end

    def encode
        Rails.application.message_verifier(:token).generate(self.id)
    end
end
  