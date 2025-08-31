import React, { useMemo } from 'react'; 
import './colourList.css';
import convert from 'color-convert';

export const ColourList = () => {
    const colours = useMemo(() => {
        const computed = window.getComputedStyle(document.body);

        return [...computed]
            .filter((prop) => prop.startsWith('--color') || prop.startsWith('--colour'))
            .map((prop) => {
                const value = computed.getPropertyValue(prop);

                const valueType = (() => {
                    if (value.startsWith(('#'))) {
                        return 'hex';
                    }

                    if (value.startsWith('rgb')) {
                        return 'rgb';
                    }

                    return 'keyword';
                })()

                return {
                    key: prop,
                    name: prop.replace(/--colo(u?)r-/, '').replace(/-/g, ' ').replace(/_/g, ' '),
                    values: [
                        {
                            type: 'hex',
                            value: valueType === 'hex' ? value : `#${convert[valueType].hex(value)}`,
                        },
                        {
                            type: 'rgb',
                            value: valueType === 'rgb' ? value : convert[valueType].rgb(value).join(', '),
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
