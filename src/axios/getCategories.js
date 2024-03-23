import axios from "axios"
import { setCategories } from "../slice/Categories.Slice"

export default async function getCategories(dispatch){
    await axios.get("http://localhost:3000/categories")
    .then((data) => {
        dispatch(setCategories(data.data))
        console.log(data.data)
    })
    .catch((err) => console.log(err))
}