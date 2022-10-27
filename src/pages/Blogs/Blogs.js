import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='flex justify-center'>
            <div className="blog-page">
                <div className="blog">
                    <p className='text-3xl font-extrabold text-[var(--primary)]'>What is Cors?</p>
                    <p className='text-[var(--base-content)]'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                <div className="blog">
                    <p className='text-3xl font-extrabold text-[var(--primary)]'>Why are you using firebase? What other options do you have to implement authentication?</p>
                    <p className='text-[var(--base-content)]'>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. We Using Firebase for Build Authenticaation, Realtime Database , Analytics and many more Feature to Use. </p>
                    <p className='text-[var(--base-content)]'>
                        We can use other Services to Build Authentication
                        <li>Prove</li>
                        <li>Duo</li>
                        <li>TypingDNA</li>
                        <li>Entrust</li>
                        <li>Okta</li>
                        <li>SecureAuth</li>
                    </p>
                </div>
                <div className="blog">
                    <p className='text-3xl font-extrabold text-[var(--primary)]'>How Does The Private Route Work?</p>
                    <p className='text-[var(--base-content)]'>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div>
                <div className="blog">
                    <p className='text-3xl font-extrabold text-[var(--primary)]'>What is Node? How Does Node Work?</p>
                    <p className='text-[var(--base-content)]'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.</p>
                    <p className='text-[var(--base-content)]'>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;