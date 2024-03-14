import homeRepo from "./homeRepo"
import authRepo from "./authRepo"

const createRepo = () => (
    {
        ...authRepo(),
        ...homeRepo()
    }
)


export default createRepo()
