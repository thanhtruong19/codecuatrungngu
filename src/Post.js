export default function Post() {
    const { slug } = useParams();
    const [post, setPost] = useState("");
    useEffect(() => {
    const fetchData = async () => {
    try {
    const response = await fetch("https://h6zwz4.csb.app/api/post/"+slug);
    const result = await response.json();
    setPost(result);
    } catch (error) { console.error("Error fetching data:", error);}
    };
    fetchData();
    }, []);
    const { title, description } = post;
    return (
    <div style={{ padding: 20 }}>
    <h3>{title}</h3>
    <p>{description}</p>
    </div>);
    }
    