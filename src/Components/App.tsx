import * as React from 'react';
import { getWidth } from '../Utils/Dimensions';
import Field from './Field/Field';

class App extends React.Component {
    public render() {
        // Width will be 66% of total width, height will be exactly half of the width
        // According to official soccer stuff
        let width = Math.floor(getWidth() * 0.66); // This will be the actual width, you scale all to this
        let height = Math.floor(0.5 * width);
        return (
            <>
                <h1>Roboteam Interface</h1>
                <Field width={width} height={height}></Field>
            </>
        )
    }
}

export default App;