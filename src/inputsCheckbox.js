import React from "react";
class Reservation extends React.Component{
        construtor(props){
            super(props);
            this.state = {
                isGoing: true,
                numberOfGuests: 2
            };

            this.handleInputChange = this.handleInputChange.bind(this);
        }

        handleInputChange(e){
            const target = e.target;
            const value = target.type === 'checkbox' ?
            target.checked : target.value;
            const name = target.name;

            this.setState (
                {[name] : value}
            );
        }; 

        render(){
            return(
                <form>
                    <label>
                        Is going: 
                        <input
                            name = "isGoing"
                            type = "checkbox"
                            checked = {this.state.isGoing}
                            onChange = {this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Number of guests:
                        <input
                            name ="numberOfGuest"
                            type = "number"
                            value ={this.state.numberOfGuests}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                </form>
            );
        }
}