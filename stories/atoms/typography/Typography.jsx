import React from 'react'; 

export const Typography = () => (
    <>
        <h1>Heading level 1</h1>
        <h2>Heading level 2</h2>
        <h3>Heading level 3</h3>
        <h4>Heading level 4</h4>
        <p>This is default text.  Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem 
Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
a galley of  type and scrambled it to make a type specimen book. It has survived not only five centuries, 
but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 
1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
publishing software like Aldus PageMaker  including versions of Lorem Ipsum.</p>
    <p><strong>This text is strong (bold)</strong></p>
    <p><em>This text is emphasised (italics)</em></p>
    <p><u>This text is underlined</u></p>
    <p><s>This text has been struck through</s></p>
    <p><small>This text is small</small></p>
    <ul>
        <li>This is an unordered list</li>
        <li>You can have many list items</li>
        <li>They will come out looking a bit like this
            <ul>
                <li>You can even have nesting list items
                    <ol>
                        <li>You can even nest different types of list</li>
                        <li>And you can nest as deep as you please</li>
                    </ol>
                </li>
            </ul>
        </li>
    </ul>
    <ol>
        <li>This is an unordered list</li>
        <li>You can have many list items</li>
        <li>They will come out looking a bit like this
            <ol>
                <li>You can even have nesting list items
                    <ul>
                        <li>You can even nest different types of list</li>
                        <li>And you can nest as deep as you please</li>
                    </ul>
                </li>
            </ol>
        </li>
    </ol>
    </>
);
