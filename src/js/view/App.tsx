import * as React from 'react';

import { AppViewModel } from "../view_model/app_view_model"

export interface AppProps {
    model: AppViewModel;
}

export function App(props: AppProps) {
    return (
        <h1>ToDo App - React vNext Architecture</h1>
    );
}
