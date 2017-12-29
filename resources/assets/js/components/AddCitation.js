import React, {Component} from 'react';

class AddCitation extends Component {

    constructor(props) {
        super(props);
        /* Initialize the state. */
        this.state = {
            newCitation: {
                citation: '',
                title: ''

            }
        }

        //Boilerplate code for binding methods with `this`
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, e) {

        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.newCitation);
        state[key] = e.target.value;
        this.setState({newCitation: state});
    }

    /* This method is invoked when submit button is pressed */
    handleSubmit(e) {
        //preventDefault prevents page reload
        e.preventDefault();
        /*A call back to the onAdd props. The current
         *state is passed as a param
         */
        this.props.onAdd(this.state.newCitation);
    }

    render() {
        const divStyle = {
            /*Code omitted for brevity */
        }

        return (
            <div>
                <h2 className="title"> Ajouter une Citation </h2>
                <div >
                    {/*                    when Submit button is pressed, the control is passed to
                     handleSubmit method
                     */}
                    <form onSubmit={this.handleSubmit}>


                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <label className="label has-text-white">La citation:</label>
                                <div className="control">
                                    <input className="input is-large" type="text"
                                           placeholder="Barrez-vous, cons de mimes !."
                                           onChange={(e) => this.handleInput('citation', e)}/>
                                </div>
                            </p>
                            <p className="control is-expanded">
                                <label className="label has-text-white">Titre du Film:</label>
                                <div className="control">
                                    <input className="input is-large" type="text" placeholder="La Cité de la peur "
                                           onChange={(e) => this.handleInput('title', e)}/>
                                </div>
                            </p>
                        </div>


                        { /* Input fields for Price and availability omitted for brevity */}

                        <input className="button is-primary is-large" type="submit" value="Envoyer"/>
                    </form>
                </div>
            </div>)
    }
}

export default AddCitation;
