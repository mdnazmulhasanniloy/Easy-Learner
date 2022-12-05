import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div style={{height: '80vh'}}>
        <div className='container'>
        <div className='my-5'>
        <div className="my-5 text-center ">
            <h1> Blog Question</h1>
            </div>
            <div className="mx-auto mx-md-5">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                        <Accordion.Header>What is React Redux?</Accordion.Header>
                        <Accordion.Body>
                        Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.                         </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="1">
                        <Accordion.Header>How React Native Works?</Accordion.Header>
                        <Accordion.Body>
                        React Native allows developers to build apps by spinning up JS threads that interpret JavaScript code, by making a native bridge between the app and the target platform. The bridge concept leverages the library and transfers the component’s hierarchy to the mobile devices view.
                        </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="2">
                        <Accordion.Header>What is React Context?</Accordion.Header>
                        <Accordion.Body>
                        React Context is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                        <Accordion.Header>Access token</Accordion.Header>
                        <Accordion.Body>
                        In computer systems, an access token contains the security credentials for a login session and identifies the user, the user's groups, the user's privileges, and, in some cases, a particular application. In some instances, one may be asked to enter an access token rather than the usual password
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
                </div>
        
            </div>
        </div>
        </div>
    );
};

export default FAQ;