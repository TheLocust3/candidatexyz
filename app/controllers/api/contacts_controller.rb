class Api::ContactsController < Api::ApiController

    def index
        render :json => Contact.all
    end

    def show
        render :json => Contact.find(params[:id])
    end

    def create
        contact = Contact.new(create_params(params))

        if contact.save
            render :json => Contact.find(contact.id)
        else
            render_errors(contact)
        end
    end

    def update
        contact = Contact.find(params[:id])

        if contact.update(update_params(params))
            render :json => Contact.find(contact.id)
        else
            render_errors(contact)
        end
    end

    def destroy
        contact = Contact.find(params[:id])
        contact.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:email, :first_name, :last_name, :zipcode, :phone_number)
    end

    def update_params(params)
        params.permit(:email, :first_name, :last_name, :zipcode, :phone_number)
    end
  end
  