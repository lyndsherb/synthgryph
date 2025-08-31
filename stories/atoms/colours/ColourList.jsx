import React, { useMemo } from 'react'; 
import './colourList.css';

export const ColourList = () => {
    const colours = useMemo(() => {
        const computed = window.getComputedStyle(document.body);

        return [...computed]
            .filter((prop) => prop.startsWith('--color') || prop.startsWith('--colour'))
            .map((prop) => ({
                key: prop,
                name: prop.replace(/--colo(u?)r-/, '').replace(/-/g, ' ').replace(/_/g, ' '),
                value: computed.getPropertyValue(prop),
            })).reverse();
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
