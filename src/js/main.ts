import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './view/App';
import { AppViewModel } from './view_model/app_view_model';

function main() {
    const viewModel = new AppViewModel();
    ReactDOM.render(
        React.createElement(App, {model: viewModel}), 
        document.getElementById('root')
    );
}

main();