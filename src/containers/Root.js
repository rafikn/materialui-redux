import React, {Component, PropTypes} from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

class Root extends Component {

    render() {
        const {store, history} = this.props;

        let devTools = (<div></div>);

        if (process.env.NODE_ENV !== 'production') {
            devTools = (<DevTools />);
        }

        return (
            <Provider store={store}>
                <div>
                    hello whybuy
                    {devTools}
                </div>
            </Provider>
        );
    }
}


Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;
