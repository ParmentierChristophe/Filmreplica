import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddCitation from './AddCitation';

class Example extends Component {
    constructor() {
        super();

        this.state = {
            citations: [],
        }
        this.handleAddCitation = this.handleAddCitation.bind(this);

    }

    componentDidMount() {
        fetch('/api/citations')
            .then(response => {
                return response.json();
            })
            .then(citations => {
                //Fetched product is stored in the state
                this.setState({citations});
            });
    }


    handleAddCitation(citation) {

        citation.price = Number(citation.price);
        /*Fetch API for post request */
        fetch('api/citations/', {
            method: 'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(citation)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {

                this.setState((prevState) => ({
                    citations: prevState.citations.concat(data),
                    currentCitation: data
                }))
            })
        //update the state of products and currentProduct
    }

    renderCitations() {

        return this.state.citations.map(citation => {
            return (
                <div className="columns">
                    <div className="column">
                        <div className="card" key={citation.id}>
                            <div className="card-content">
                                <p className="title">
                                    "{citation.citation}"
                                </p>
                                <p className="is-italic subtitle has-text-right ">
                                    {citation.title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>);
        })

    }

    render() {
        return (
            <div>
                <div className="container">

                    <h1 className="title is-1 has-text-centered">Film replica</h1>


                    <h2 className="subtitle ">Toutes les repliques:</h2>

                    { this.renderCitations() }
                </div>
                <hr/>
                <section className="hero is-dark">
                    <div className="hero-body">
                        <div className="container">

                            <div className="column">
                                <AddCitation onAdd={this.handleAddCitation}/>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
            ;
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
