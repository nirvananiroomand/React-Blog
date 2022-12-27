import Blogs from "./Blogs";
import useFetch from "./useFetch";

const title = "Welcome to the blog";

const Home = () => {

    // const handleClick = () =>{
    //     console.log('bottun clicked');
    // };
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id != id)
    //     setBlogs(newBlogs)
    // }


    const {data, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            <h2 className="Welcome"> {title} </h2>
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {data && <Blogs title="All Blogs" blogs={data}  />}
            {/* <Blogs title="Miranda's Blogs" blogs={blogs.filter((blog) => blog.author === 'Miranda')}/> */}
            {/* <button onClick={handleClick}>Click</button> */}
        </div>
     );
};
 
export default Home;