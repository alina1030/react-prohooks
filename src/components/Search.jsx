
import axios from "axios"
import React from "react"



const Search = () => {
    const [search, setsearch] = React.useState('')
    const [results, setresult] = React.useState()


    const searchbook = async (name) => {
        try {
            const query = name.split(" ").join('+')
            const api = await axios.get(`http://openlibrary.org/search.json?q=${query}`, {
            })
            setresult(api.data.docs)
        } catch (error) {
            console.error(error.message);

        }
    }

    React.useEffect(() => {
        if (search !== '')
            searchbook(search)
    }, [search])

    const ui = results?.map(ele =>

        <tr>
            <td>{ele.title}</td>
            <td>{ele.author_name ? ele.author_name : "N/A"}</td>
            <td>{ele.first_publish_year ? ele.first_publish_year : "N/A  "}</td>
        </tr>
    )
    return (
        <React.Fragment>
            <input type="search" placeholder="Search" value={search} onChange={(e) => setsearch(e.target.value)} autoFocus={true} />
            <h1>Search Result</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pub. Year</th>
                    </tr>
                </thead>
                <tbody>
                    {ui}
                </tbody>
            </table>

        </React.Fragment>
    )
}


export default Search

