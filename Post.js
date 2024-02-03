import defult_img from'../src/assets/blog.webp';
export default function Post(){
    return(
        <div className='post'>
        <div className='image'>
       <img src={defult_img} alt=''></img>
       </div>
       <div className='texts'>
       <h2>Demo image</h2>
       <p>my first try blog with img</p>
       </div>
       </div> 
    );
}
