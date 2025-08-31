import React, { useMemo } from 'react'; 
import './colourList.css';

export const ColourList = () => {
    const colours = useMemo(() => {
        const computed = window.getComputedStyle(document.body);
        const colours = [];

        // https://stackoverflow.com/a/78242666/7447859
        for(let i = 0; i < computed.length; i++) {
            const prop = computed[i];

            if (prop.startsWith('--color') || prop.startsWith('--colour')) {
                colours.push({
                    key: prop,
                    name: prop.replace(/--colo(u?)r-/, ''),
                    value: computed.getPropertyValue(prop),
                });
            }
        }

        // reverse to get colours in the right order;
        // since it's cascading stylesheets, we get everything from the lowest
        // line of code going up to the highest
        return colours.reverse();
    }, []);
    
    return (
        <div className="swatchGrid">
            {colours.length ? colours.map(colour => (
                <div className="swatchItem" key={colour.key}>
                    <div className="swatch" style={{ backgroundColor: colour.value }} />
                    <h4 className="swatchTitle">{colour.name}</h4>
                    <code>{colour.value}</code>
                </div>
            )) : <>No colours found</>}
        </div>
    );
}
