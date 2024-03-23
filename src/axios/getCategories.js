import axios from "axios"
import { setCategories } from "../slice/Categories.Slice"

export default async function getCategories(dispatch){
    await axios.get("https://datab-quej.onrender.com/categories")
    .then((data) => {
        dispatch(setCategories(data.data))
        console.log(data.data)
    })
    .catch((err) => console.log(err))
}