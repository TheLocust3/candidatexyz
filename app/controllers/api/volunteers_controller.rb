class Api::VolunteersController < Api::ApiController

    def index
        render :json => Volunteer.all
    end

    def show
        render :json => Volunteer.find(params[:id])
    end

    def create
        volunteer = Volunteer.new(create_params(params))

        if volunteer.save
            render :json => Volunteer.find(volunteer.id)
        else
            render_errors(volunteer)
        end
    end

    def update
        volunteer = Volunteer.find(params[:id])

        if volunteer.update(update_params(params))
            render :json => Volunteer.find(volunteer.id)
        else
            render_errors(volunteer)
        end
    end

    def destroy
        volunteer = Volunteer.find(params[:id])
        volunteer.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:email, :home_number, :mobile_number, :first_name, :last_name, :address1, :address2, :zipcode, :city, :state, :help_blurb)
    end

    def update_params(params)
        params.permit(:email, :home_number, :mobile_number, :first_name, :last_name, :address1, :address2, :zipcode, :city, :state, :help_blurb)
    end
  end
  