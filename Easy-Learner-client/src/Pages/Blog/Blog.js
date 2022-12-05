import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div style={{height: '80vh'}}>
        <div className='container'>
        <div className='my-5'>
        <div className="my-5 text-center ">
            <h1 className='spacial-text'> Blog Question</h1>
            </div>
            <div className="mx-auto mx-md-5">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                        <Accordion.Header>What is cors?</Accordion.Header>
                        <Accordion.Body>
                                    CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the AP
                        </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="2">
                        <Accordion.Header>How does the private route work?</Accordion.Header>
                        <Accordion.Body>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                        <Accordion.Body>
                        Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
                </div>
        
            </div>
        </div>
        </div>
    );
};

export default Blog;