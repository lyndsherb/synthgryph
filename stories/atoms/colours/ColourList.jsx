import React, { useMemo } from 'react'; 
import convert from 'color-convert';
import './colourList.css';

export const ColourList = () => {
    const colours = useMemo(() => {
        const computed = window.getComputedStyle(document.body);

        return [...computed]
            .filter((prop) => prop.startsWith('--color') || prop.startsWith('--colour'))
            .map((prop) => {
                // this is now untidy; this might return a string or a string[], so at some point 
                // if i want to work with this further i need to tidy it up.
                // at least i've roughly figured out my idea
                let value = computed.getPropertyValue(prop);

                const valueType = (() => {
                    if (value.startsWith(('#'))) {
                        return 'hex';
                    }

                    if (value.startsWith('rgb')) {
                        // if rgb/rgba, transforms into an array of [r, g, b, a]
                        // see above comment re: transforming a string value into an array value
                        value = value.replace(/rgb(a?)\(/, '').replace(')', '').split(',').map(str => str.trim());

                        return 'rgb';
                    }

                    return 'keyword';
                })();

                return {
                    key: prop,
                    name: prop.replace(/--colo(u?)r-/, '').replace(/-|_/g, ' '),
                    values: [
                        {
                            type: 'hex',
                            value: valueType === 'hex' ? value : `#${convert[valueType].hex(value)}`,
                        },
                        {
                            type: 'rgb',
                            value: valueType === 'rgb' ? value.join(', ') : convert[valueType].rgb(value).join(', '),
                        },
                        {
                            type: 'keyword',
                            value: valueType === 'keyword' ? value : convert[valueType].keyword(value),
                        }
                    ],
                };
            }).reverse();
    }, []);
    
    return (
        <div className="swatchGrid">
            {colours.length ? colours.map(colour => (
                <div className="swatchItem" key={colour.key}>
                    <div className="swatch" style={{ backgroundColor: colour.values.find(val => val.type === 'hex').value }} />
                    <h4 className="swatchTitle">{colour.name}</h4>
                    <ul>
                        {colour.values.map(val => (
                            <li key={`${colour.key}.${val.type}`}>
                                <b>{val.type}</b>: <code>{val.value}</code>
                            </li>
                        ))}
                    </ul>
                </div>
            )) : <>No colours found</>}
        </div>
    );
}
