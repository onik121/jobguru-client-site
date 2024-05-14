import img1 from '../assets/blog1.jpg'
import img2 from '../assets/blog2.jpg'

const Blog = () => {
    return (
        <div className="min-h-[calc(100vh-325px)] mb-14 mt-4 flex gap-8 blog-container">
            <div className='w-[30%] blog-newsletter p-4 h-fit rounded-md'>
                <h1 className='text-3xl font-semibold text-[#3f3f3f]'>Get the latest blogs!</h1>
                <h2 className='text-xl font-medium text-[#3f3f3f] mb-4 mt-1'>Enter your email address below</h2>
                <input type="text" name="" id="" className='block' />
                <button className='button mt-4'>Subscribe</button>
            </div>
            <div className='w-[70%] space-y-8'>
                <div className='bg-[#f1fcf6] p-4 rounded-md boder'>
                    <div className='mb-3'>
                        <img className='rounded-md' src={img1}></img>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-3xl font-medium mb-2'>What is an access token and refresh token?</h1>
                            <p className='mb-4 text-lg font-medium'>Access tokens and refresh tokens are commonly used in authentication systems, particularly in OAuth 2.0 and similar protocols.</p>
                            <p className='mb-2 text-lg'><span className='font-medium'>Access Token:</span> An access token is a credential that represents the authorization of a specific user to access resources on a server. It is typically issued by an authentication server after the user successfully logs in or grants authorization. The access token is then sent with each request to the server to access protected resources. It has a limited lifespan to enhance security.</p>
                            <p className='text-lg'><span className='font-medium'>Refresh Token:</span> A refresh token is a special token used to obtain a new access token after the current access token expires. Unlike access tokens, refresh tokens have a longer lifespan and are used to request new access tokens without requiring the user to log in again. Refresh tokens are securely stored and should only be sent to the authorization server.</p>
                        </div>
                        <div className='mt-8'>
                            <h1 className='text-3xl font-medium mb-2'>Where to Store Access Tokens and Refresh Tokens on the Client Side</h1>
                            <p className='mb-4 text-lg font-medium'>Access tokens and refresh tokens should be stored securely on the client side to maintain the user's session and enable seamless interaction with the server. However, it's essential to follow best practices to prevent security vulnerabilities.</p>
                            <p className='mb-2 text-lg'><span className='font-medium'>Access Token:</span> Access tokens are typically stored in memory, such as in JavaScript variables or browser storage mechanisms like session storage or local storage. Storing them in memory helps mitigate the risk of exposure to malicious scripts or attacks. Additionally, using HTTP-only cookies for access tokens can enhance security by preventing access from client-side scripts.</p>
                            <p className='text-lg'><span className='font-medium'>Refresh Token:</span> Refresh tokens have higher security requirements due to their longer lifespan and ability to obtain new access tokens. They should never be exposed to client-side code or stored in accessible locations like JavaScript variables or browser storage. Instead, refresh tokens should be securely stored in HTTP-only cookies, which can only be accessed by the server during HTTP requests.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f1fcf6] p-4 rounded-md boder'>
                    <div className='mb-3'>
                        <img className='rounded-md' src={img2}></img>
                    </div>
                    <div>
                        <h1 className='text-3xl font-medium mb-2'>Exploring Express.js and Nest.js</h1>
                        <p className='mb-2 text-lg'><span className='font-medium'>Express.js:</span> Express.js is a minimalist web framework for Node.js that simplifies the process of building web applications and APIs. It provides a robust set of features for handling HTTP requests, routing, middleware, and more. Express.js is highly flexible and lightweight, making it a popular choice for developing server-side applications in Node.js.</p>
                        <p className='text-lg'><span className='font-medium'>Next.js:</span> Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js and provides an opinionated architecture inspired by Angular. Nest.js leverages TypeScript's features to enhance developer productivity and maintainability. It offers built-in support for features like dependency injection, modular architecture, and testing, making it well-suited for large-scale enterprise applications.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;