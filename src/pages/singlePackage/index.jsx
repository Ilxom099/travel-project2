import React from 'react';
import "./single.css"
function Index(props) {
    return (
        <div className='ota container-fluid p-0 h-auto ' >
           
            <div className="block1  " >

                <img className='bg-img' style={{ width: "100%", height: "100vh" }} src="../../../public/unsplash_NXET8dOlKHU.png" alt="" />
                <h1 >Travel Stories For Now
                    <br />
                    and the Future </h1>

            </div>
            <div className="block2">
                <div className="foto2">
                    <img src="../../../public/unsplash_1XLyzi17Z2M.png" alt="" />
                    <p style={{ fontSize: "19px", lineHeight: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        <br /> laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        <br /> ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        <br /> cillum dolore eu fugiat nulla pariatur. </p>
                </div>

                <div className="text2">
                    <img src="../../../public/Group 197.svg" alt="" />
                    <img style={{ marginTop: "40px" }} src="../../../public/Group 200.svg" alt="" />
                </div>
            </div>
            <div className="block3">
                <div className="foto3">
                    <h2>Rice Terraces, Tegallalang</h2>
                    <p style={{ fontSize: "19px", lineHeight: "30px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        <br /> occaecat cupidatat non proident.</p>
                    <img src="../../../public/unsplash_XbPG4k-KUwE.png" alt="" />
                    <p style={{ fontSize: "19px", lineHeight: "35px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        <br /> occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        <br /> laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        <br /> ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        <br /> cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className="text3">
                    <img style={{ width: "100%" }} src="../../../public/Have ny Question_.png" alt="" />
                </div>
            </div>
            <div className="block4">
                <div className="form4">
                    <h3>Leave a Reply</h3>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <h4>Comment</h4>
                    <textarea style={{ border: "1px solid", borderRadius: "8px", width: "100%", height: "300px", padding: "20px" }} name="" id=""></textarea>
                    <span style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <label htmlFor="name">Name *</label>
                        <input className='form-control' id='name' type="text" style={{ border: "1px solid", borderRadius: "8px", height: "45px", padding: "0 20px" }} />
                    </span>

                    <span style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <label htmlFor="email">Email *</label>
                        <input className='form-control' id='email' type="text" style={{ border: "1px solid", borderRadius: "8px", height: "45px", padding: "0 20px" }} />
                    </span>

                    <span style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <label htmlFor="web">Website *</label>
                        <input className='form-control' id='web' type="text" style={{ border: "1px solid", borderRadius: "8px", height: "45px", padding: "0 20px" }} />
                    </span>
                    <span style={{display:"flex", gap:"15px",alignItems:"center"}}>
                        <input id='check' style={{width:"20px", height:"20px"}} type="checkbox" />
                        <label htmlFor="check"><h5>Save my name, email, and website in this browser for the next time I comment.</h5></label>
                        </span>
                        <button style={{backgroundColor:"black", padding:"13px 0"}} className='btn btn-dark w-25 rounded-pill '>Post Comment</button>

                </div>
            </div>
        </div>
    );
}

export default Index;