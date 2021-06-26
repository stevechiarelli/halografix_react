import React from "react";

const DataContext = React.createContext();

class DataProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            appdata: null
        }
    }

    componentDidMount() {
        fetch("halografix.json")
        .then(response => response.json())
        .then(json => {
            this.setState({
                appdata: json
            });
        });
    }

    render() {
        return (
            <DataContext.Provider value={this.state.appdata}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export { DataProvider, DataContext };